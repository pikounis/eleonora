import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from "redux-observable";
import { reducer } from '../model';
import epics from '../model/epics';

const  epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(epics);

export default store;