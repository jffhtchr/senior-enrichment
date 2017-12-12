import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/student';

class Home extends Component {
  render(){
    return(
      <div id="home-container">
        <h1>Welcome to <br/>Jeff's Space School!</h1>
      </div>
      )}
}

const HomeContainer = connect()(Home)
export default HomeContainer;


