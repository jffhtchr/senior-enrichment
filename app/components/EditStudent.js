import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'; 
import { connect } from 'react-redux';
import { fetchOneStudent, editStudent, editAStudent } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';

class EditStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            gpa:"",
            CampusId: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        const studentId = this.props.match.params.id;
        this.props.loadStudent(studentId);
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
        if(event.target.name === "gpa"){
            this.setState({gpa: event.target.value})
        }
        if(event.target.name === "campusSelect"){
            this.setState({CampusId: event.target.value})
        }
    }
    
    render(){
        return(
            <div>
                <form className="add-form" onSubmit={this.props.handleSubmit}>
                    <label>First Name</label>
                    <input onChange={this.handleChange}
                        type="text"
                        placeholder={this.props.student.firstName}
                        name="studentFirstName"
                        value = {this.state.firstName}
                    />
                    <label>Last Name</label>
                    <input onChange={this.handleChange}
                        type="text"
                        placeholder={this.props.student.lastName}
                        name="studentLastName"
                        value = {this.state.lastName}
                     />   
                     <label>Email</label>
                    <input onChange={this.handleChange}
                        type="text"
                        placeholder={this.props.student.email}
                        name="emailAddress"
                        value = {this.state.email}
                    />  
                     <label>GPA</label>
                    <input onChange={this.handleChange}
                        type="text"
                        placeholder={this.props.student.gpa}
                        name="gpa"
                        value = {this.state.gpa}
                    /> 
                    <label>Select Campus</label>
                    <select onChange={this.handleChange} name="campusSelect">{
                        this.props.campuses.length && (
                        this.props.campuses.map( campus => {
                        return(
                            <option key={campus.id} value={campus.id}>
                            {campus.name}
                            </option>
                        )
                        }))
                    }</select>
                    <button className="add-thing" type='submit'>Update Student</button>    
                </form>    
            </div>
        )
    }
}

function mapStateToProps(storeState){
    return {
        student: storeState.student,
        campuses: storeState.campus
    }
}

function mapDispatchToProps (dispatch, ownProps){
    return{ 
        loadStudent: function(studentId){
            dispatch(fetchOneStudent(studentId))
        },
        handleSubmit(event){
            event.preventDefault();
            const payload = {id:ownProps.match.params.id, firstName: event.target.studentFirstName.value, lastName:event.target.studentLastName.value, email: event.target.emailAddress.value, gpa:event.target.gpa.value, CampusId:event.target.campusSelect.value}
            dispatch(editStudent(payload, ownProps.history))
        },
        loadCampuses: function(){
            dispatch(fetchCampuses())
        }
    }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)
export default EditStudentContainer;