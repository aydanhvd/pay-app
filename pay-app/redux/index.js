import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {MODULE_NAME as usersModuleName , reducer as usersReducer} from './users'

const rootReducer = combineReducers({
   [usersModuleName]:usersReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
