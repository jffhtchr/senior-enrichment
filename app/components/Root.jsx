import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import axios from 'axios';
import Navbar from "./Navbar";

//Components
import AllCampusesContainer from './AllCampuses';
import AllStudentsContainer from './AllStudents';
import SingleCampusContainer from './SingleCampus';
import SingleStudentContainer from './SingleStudent';
import AddCampusContainer from './AddCampus';
import AddStudentContainer from './AddStudent';
import EditCampusContainer from './EditCampus';
import EditStudentContainer from './EditStudent';
import HomeContainer from './Home';

export default class Root extends Component {
  render() {
  return (
    <Router>
      <div id="main-container">
       <Navbar />
       <div className='main-content'>
        <Switch>
          <Route exact path="/campuses" component={AllCampusesContainer} />
          <Route exact path="/students" component={AllStudentsContainer} />
          <Route exact path="/campuses/:id" component={SingleCampusContainer} />
          <Route exact path="/students/:id" component={SingleStudentContainer} />
          <Route exact path="/addcampus" component={AddCampusContainer} />                    
          <Route exact path="/addstudent" component={AddStudentContainer} />
          <Route exact path="/editcampus/:id" component={EditCampusContainer} />
          <Route exact path="/editstudent/:id" component={EditStudentContainer} />          
          <Route default path="/" component={HomeContainer} /> 
        </Switch>
       </div>
      </div>
    </Router>
    );

  }
}
