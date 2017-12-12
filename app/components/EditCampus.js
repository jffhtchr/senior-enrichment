import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'; 
import { connect } from 'react-redux';
import { fetchOneCampus, editCampus, editACampus } from '../reducers/campus';

class EditCampus extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            imgUrl:"",
            description:""
          }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        const campusId = this.props.match.params.id
        this.props.loadCampus(campusId)
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
            <div>
            <form className="add-form" onSubmit={this.props.handleSubmit}>
            <label>Campus Name</label>
            <input onChange ={this.handleChange}
                type="text"
                placeholder={this.props.campus.name}
                name="campusName"
                value = {this.state.name}
            />
            <label>Image URL</label>
            <input onChange ={this.handleChange}
                type="text"
                placeholder={this.props.campus.imgUrl}
                name="campusImg"
                value = {this.state.imgUrl}
            />   
            <label>Description</label>
            <input onChange ={this.handleChange}
                type="text"
                placeholder={this.props.campus.description}
                name="campusDescription"
                value = {this.state.description}
            />  
            <button className="add-thing" type='submit'>Update Campus</button>    
        </form>  
            </div>
        )
    }
}

function mapStateToProps(storeState){
    return {
        campus: storeState.campus
    }
}

function mapDispatchToProps (dispatch, ownProps){
    return{ 
        loadCampus: function(campusId){
            dispatch(fetchOneCampus(campusId))
        },
        handleSubmit(event){
            event.preventDefault();
            const payload = {id:ownProps.match.params.id, name: event.target.campusName.value, imgUrl:event.target.campusImg.value, description:event.target.campusDescription.value}
            dispatch(editCampus(payload, ownProps.history))
        }
    }
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)
export default EditCampusContainer;