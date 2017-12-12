import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/student';
import { NavLink } from 'react-router-dom';


class AllStudents extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.loadStudents()
  }
  render(){
    return(
      <Router>
      <div className="all-things">
      <ul>{ 
       this.props.students.length && (
        this.props.students.map( student => {
          return (
            <NavLink className="navStyle" to={`/students/${student.id}`}> 
            <div key={student.id} className="all-things-box">
              <li>{student.fullName}</li>
             </div></NavLink> 
          )
      }))
     }
      </ul>
      <div>
        <button className="add-thing"><NavLink className="navStyle" to={`/addstudent/`}>Add Student</NavLink></button>
      </div>
      </div>
      </Router>
      )} 
}

function mapStateToProps (storeState) {
  return {
    students: storeState.student
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: function() {
      dispatch(fetchStudents());
    }
  }
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)
export default AllStudentsContainer;

