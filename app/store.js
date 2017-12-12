import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from "redux-devtools-extension"
import axios from 'axios';


export default createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
)
