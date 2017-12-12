import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus, addACampus } from '../reducers/campus';

class AddCampus extends Component {
    constructor(props){
        super(props)
        this.state ={
          name:"",
          imgUrl:"",
          description:""
        }
        this.handleChange = this.handleChange.bind(this)
      }
     
    handleChange(event){
        if(event.target.name === "campusName"){
            this.setState({name: event.target.value})
        }
        if(event.target.name === "campusImg"){
            this.setState({imgUrl: event.target.value})
        }
        if(event.target.name === "campusDescription"){
            this.setState({description: event.target.value})
        }
    }
    
    render(){
        return(
            <div className="form-box">
                <form className="add-form" onSubmit={this.props.handleSubmit}>
                    <label>Campus Name</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Enter Campus Name"
                        name="campusName"
                        value = {this.state.name}
                    />
                    <label>Image URL</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Enter Campus URL"
                        name="campusImg"
                        value = {this.state.imgUrl}
                    />  
                    <label>Description</label>
                    <input onChange ={this.handleChange}
                        type="text"
                        placeholder="Descripe Your Campus"
                        name="campusDescription"
                        value = {this.state.description}
                    />  
                    <button className="add-thing" type='submit'>Add Campus</button>    
                </form>
            </div>
        )
    }

}

function mapStateToProps (storeState) {
    return {
        newCampus: storeState.campus
}
  }
  
  function mapDispatchToProps (dispatch, ownProps) {
    return {
        handleSubmit(event){
            event.preventDefault();
            const payload = {name: event.target.campusName.value, imgUrl:event.target.campusImg.value, description:event.target.campusDescription.value}
            dispatch(addCampus(payload, ownProps.history))
            .then(() => console.log("Good job adding a campus!"))
    }
      }
    }
  
  
  const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus)
  export default AddCampusContainer;
