import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus';
import { NavLink } from 'react-router-dom';

class AllCampuses extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.loadCampuses()
  }
  render(){
    return(
      <Router>
      <div className="all-things">
      <ul>{
        this.props.campuses.length && (
        this.props.campuses.map( campus => {
          return (
            <NavLink className="navStyle" to={`/campuses/${campus.id}`}><div key={campus.id} className="all-things-box">
              <li>{campus.name}</li>
            </div></NavLink>
          )
      }))
     }
      </ul>
      <div>
      <button className="add-thing"><NavLink className="navStyle" to={`/addcampus/`}>Add Campus</NavLink></button>
      </div>
      </div>
      </Router>
      )}
}

function mapStateToProps (storeState) {
  return {
    campuses: storeState.campus
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function() {
      dispatch(fetchCampuses());
    }
  }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
export default AllCampusesContainer;

