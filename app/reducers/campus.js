import axios from 'axios';

//ACTION TYPES
const FETCH_CAMPUSES = 'FETCH_CAMPUSES'
const GOT_CAMPUSES_FROM_SERVER = "GOT_CAMPUSES_FROM_SERVER"
const FETCH_ONE_CAMPUS = 'FETCH_ONE_CAMPUS'
const GOT_ONE_CAMPUS_FROM_SERVER = 'GOT_ONE_CAMPUS_FROM_SERVER'
const DELETE_A_CAMPUS = 'DELETE_A_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const EDIT_CAMPUS = 'EDIT_CAMPUS'

//ACTION CREATORS
export function gotCampusesFromServer(campuses){
    return{
        type: GOT_CAMPUSES_FROM_SERVER,
        campuses: campuses
    }
}

export function gotOneCampusFromServer(campus){
    return {
        type: GOT_ONE_CAMPUS_FROM_SERVER,
        campus: campus
    }
}

export function deleteACampus(campus){
    return {
        type: DELETE_A_CAMPUS,
        campus: campus
    }
}

export function addACampus(campus){
    return {
        type: ADD_CAMPUS,
        campus: campus
    }
}

export function editACampus(campus){
    return{
        type: EDIT_CAMPUS,
        campus: campus
    }
}

//THUNKS
export function fetchCampuses(){
   return function thunk(dispatch){
       return axios.get(`/api/campuses/`)
       .then(response => response.data)
       .then(campuses => {
          dispatch(gotCampusesFromServer(campuses))
       })
       .catch(console.error)
   }  
}

export function fetchOneCampus(id){
    return function thunk(dispatch){
        return axios.get(`api/campuses/${id}`)
        .then(response => response.data)
        .then(campus => {
            dispatch(gotOneCampusFromServer(campus))
        })
        .catch(console.error)
    }
}

export function deleteCampus(campus, history){
    return function thunk(dispatch){
        return axios.delete(`/api/campuses/${campus.id}`)
        .then(()=>{
            dispatch(deleteACampus(campus))
            history.push('/campuses')
        })
    }
}

export function addCampus(campus, history){
    return function thunk(dispatch){
        return axios.post(`api/campuses/`, campus)
        .then((campus)=>{
            dispatch(addACampus(campus))
            history.push('/campuses')
        })
    }
}

export function editCampus(campus, history){
    const id = campus.id
    return function thunk(dispatch){
        return axios.put(`api/campuses/${campus.id}`, campus)
        .then((campus) =>{
            dispatch(addACampus(campus))
            history.push(`/campuses/${id}`)
        })
    }
}

//REDUCER
const intitialState = []


function campusReducer(state = intitialState, action){
    switch(action.type){
        case GOT_CAMPUSES_FROM_SERVER: 
            return action.campuses
        case GOT_ONE_CAMPUS_FROM_SERVER:
            return action.campus    
        case ADD_CAMPUS:
            return action.campus
        case EDIT_CAMPUS:
            return action.campus       
        default: 
            return state; 
    }
}

export default campusReducer;

  // deleteCampus(event){
  //   axios.delete(`/api/campuses/${event.target.value}`)
  //   .then(deleted => {
  //     this.setState()
  //   })
  // }