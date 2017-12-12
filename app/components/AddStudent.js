import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent, addAStudent } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';

class AddStudent extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            CampusId:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.loadCampuses();
    }
     
    handleChange(event){
        if(event.target.name === "studentFirstName"){
            this.setState({firstName: event.target.value})
        }
        if(event.target.name === "studentLastName"){
            this.setState({lastName: event.target.value})
        }
        if(event.target.name === "emailAddress"){
            this.setState({email: event.target.value})
        }
        if(event.target.name === "campusSelect"){
            this.setState({CampusId: event.target.value})
        }
    }
    
    render(){
        return(
            <div className="form-box">
                <form className="add-form" onSubmit={this.props.handleSubmit}>
                    <label>First Name</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Enter Student Name"
                        name="studentFirstName"
                        value = {this.state.firstName}
                    />
                    <label>Last Name</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Enter Last Name"
                        name="studentLastName"
                        value = {this.state.lastName}
                    />   
                    <label>Email</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Enter Email Address"
                        name="emailAddress"
                        value = {this.state.email}
                    />
                    <label>Select A Campus</label>
                    <select onChange={this.handleChange} name='campusSelect' >{
                        this.props.campuses.length && (
                        this.props.campuses.map( campus => {
                            return(
                                <option key={campus.id} value={campus.id}>
                                {campus.name}
                                </option>
                            )
                        }))
                    }</select> 
                    <button className="add-thing" type='submit'>Add Student</button>    
                </form>
            </div>
        )
    }
}

function mapStateToProps (storeState) {
    return {
        newStudent: storeState.student,
        campuses: storeState.campus
    }
  }
  
  function mapDispatchToProps (dispatch, ownProps) {
    return {
        handleSubmit(event){
            event.preventDefault();
            const payload = {firstName: event.target.studentFirstName.value, lastName:event.target.studentLastName.value, email:event.target.emailAddress.value, CampusId:event.target.campusSelect.value}
            dispatch(addStudent(payload, ownProps.history))
            .then(() => console.log("Good job adding a student"))
        },
        loadCampuses(){
            dispatch(fetchCampuses())
        }
      }
    }
  
  
  const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent)
  export default AddStudentContainer;
