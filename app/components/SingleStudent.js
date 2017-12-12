import React, { Component } from 'react';
import { browserHistory } from 'react-router'; 
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneStudent, deleteStudent } from '../reducers/student';
import { fetchOneCampus } from '../reducers/campus';
import { NavLink } from 'react-router-dom';

class SingleStudent extends Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    const studentId = this.props.match.params.id
    const campusId = this.props.students.CampusId
    this.props.loadStudent(studentId)
  }

  render(){
    return(
      <Route>
      <div className="one-thing">
        <div>
          <p>Name: {this.props.students.fullName}</p>
          <p>Email: {this.props.students.email}</p>
          <p>GPA: {this.props.students.gpa}</p>
          <p>Campus:{ 
            this.props.students.Campus && <NavLink to={`/campuses/${this.props.students.CampusId}`}><button className="student-button">{this.props.students.Campus.name}</button></NavLink>
          }
          </p>
        </div> 
        <NavLink to={`/editstudent/${this.props.students.id}`}><button className="add-thing"> Edit {this.props.students.firstName}</button></NavLink>
        <button className="add-thing" onClick={event => this.props.deleteStudent(this.props.students)}>
           Delete {this.props.students.firstName}
        </button>
      </div>
      </Route>
    )}
}

function mapStateToProps (storeState) {
  return {
    students: storeState.student,
    campus:storeState.campus
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  console.log("ownProps: ", ownProps)
  return {
    loadStudent(studentId, campusId){
      dispatch(fetchOneStudent(studentId))
    },
    deleteStudent(student){
      dispatch(deleteStudent(student, ownProps.history))
    }
    // loadCampus(campusId){
    //   dispatch(fetchOneCampus(campusId));
    // }
  }
};

const SingleStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
export default SingleStudentsContainer;


//NavLink Stuff
// <NavLink to="/students"><button onClick={
//   event => this.destroyStudent(this.props.students.id)}
//   value={this.props.students.id}>
//   Delete {this.props.students.firstName}
// </button></NavLink>