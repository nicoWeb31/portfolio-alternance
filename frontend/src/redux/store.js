import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reducForm } from 'redux-form';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {messageReducer} from './reducer/messageReducer';
import { projetReducer } from './reducer/projetReducer';

const reducer = combineReducers({
    messages: messageReducer,
    projets: projetReducer,
    form: reducForm
})

const initialState = {};

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;