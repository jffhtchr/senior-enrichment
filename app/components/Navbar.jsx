import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import index from '../reducers/index';

export default class Navbar extends Component {

  render() {
    return (
     <ul className="nav">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/campuses">Campuses</NavLink></li>
        <li><NavLink to="/students">Students</NavLink></li>
     </ul>
    )
  }
}


