import axios from 'axios';

//ACTION TYPES
const FETCH_STUDENTS = 'FETCH_STUDENTS'
const GOT_STUDENTS_FROM_SERVER = "GOT_STUDENTS_FROM_SERVER"
const FETCH_ONE_STUDENT = 'FETCH_ONE_STUDENT'
const GOT_ONE_STUDENT_FROM_SERVER = "GOT_ONE_STUDENT_FROM_SERVER"
const DELETE_A_STUDENT = "DELETE_A_STUDENT"
const ADD_STUDENT = "ADD_STUDENT"
const EDIT_STUDENT = "EDIT_STUDENT"

//ACTION CREATORS
export function gotStudentsFromServer(students){
    return{
        type: GOT_STUDENTS_FROM_SERVER,
        students: students
    }
}

export function gotOneStudentFromServer(student){
    return {
        type: GOT_ONE_STUDENT_FROM_SERVER,
        student: student
    }
}

export function deleteAStudent(student){
    return {
        type: DELETE_A_STUDENT,
        student: student
    }
}

export function addAStudent(student){
    return{
        type: ADD_STUDENT,
        student: student
    }
}

export function editAStudent(student){
    return{
        type: EDIT_STUDENT,
        student:student
    }
}

//THUNKS
export function fetchStudents (){
   return function thunk(dispatch){
       return axios.get(`/api/students/`)
       .then(response => response.data)
       .then(students => {
          dispatch(gotStudentsFromServer(students))
       })
       .catch(console.error)
   }  
}

export function fetchOneStudent (id){
    return function thunk(dispatch){
        return axios.get(`/api/students/${id}`)
        .then(response => response.data)
        .then(student => {
           dispatch(gotOneStudentFromServer(student))
        })
        .catch(console.error)
    }  
 }

export function deleteStudent(student, history){
    return function thunk(dispatch){
        return axios.delete(`/api/students/${student.id}`)
        .then(()=>{
            dispatch(deleteAStudent(student))
            history.push('/students')
        })
    }
}

export function addStudent(student, history){
    return function thunk(dispatch){
        return axios.post(`api/students/`, student)
        .then((student)=>{
            dispatch(addAStudent(student))
            history.push('/students')
        })
    }
}

export function editStudent(student, history){
    const id = student.id
    return function thunk(dispatch){
        return axios.put(`api/students/${student.id}`, student)
        .then((student)=>{
            dispatch(addAStudent(student))
            history.push(`/students/${id}`)
        })
    }
}

//REDUCER
const intitialState = [];

function studentReducer(state = intitialState, action){
    switch(action.type){
        case GOT_STUDENTS_FROM_SERVER: 
            return action.students
        case GOT_ONE_STUDENT_FROM_SERVER:
            return action.student    
        case ADD_STUDENT:
            return action.student    
        case EDIT_STUDENT:
            return action.student       
        default: 
            return state; 
    }
}

// const intitialState = {
//     students = [],
//     oneStudent: {}
// }

// function studentReducer(state = initialState, action){
//     switch(action.type){
//         case GOT_STUDENTS_FROM_SERVER: 
//             return {...state, students = action.students}
//         case GOT_ONE_STUDENT_FROM_SERVER:
//             return {...state, oneStudent: action.student}
//         default: 
//             return state;     
//     }
// }

export default studentReducer;