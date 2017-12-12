import React, { Component } from 'react';
import { browserHistory } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneCampus, deleteCampus } from '../reducers/campus';
import { NavLink } from 'react-router-dom';

class SingleCampus extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const campusId = this.props.match.params.id
    this.props.loadCampus(campusId)
  }

  render(){
    return(
      <Route>
      <div className="one-thing">
          <div><h1>{this.props.campuses.name} Campus</h1></div>
          <div>About: {this.props.campuses.description}</div>
      <div className="campus-img-container">
        <img className="campus-img" src ={this.props.campuses.imgUrl} />
      </div>   
      <div>
        <h3>Students of {this.props.campuses.name}:</h3>
       {
          this.props.campuses.Students && (
            this.props.campuses.Students.map( student => {
              return (
                <div key={student.id} className="mapped-students">
                 <NavLink to={`/students/${student.id}`}><button className="student-button">-{student.fullName}</button></NavLink>
                </div>
              )
            })
          )
        }
        </div>
        <NavLink to={`/editcampus/${this.props.campuses.id}`}><button className="add-thing">
        Edit {this.props.campuses.name}
      </button></NavLink>
      <button className="add-thing" onClick={event => this.props.deleteCampus(this.props.campuses)}>
         Delete {this.props.campuses.name}
      </button>  
      </div>      
    
      </Route>
      )}
}

function mapStateToProps (storeState) {
  return {
    campuses: storeState.campus
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    loadCampus: function(campusId) {
      dispatch(fetchOneCampus(campusId));
    },
    deleteCampus(campus){
      dispatch(deleteCampus(campus, ownProps.history))
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
export default SingleCampusContainer;

