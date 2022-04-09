import {createStore, combineReducers} from "redux";
import preferencesReducer, {AppState} from './reducer';



const store = createStore(combineReducers<AppState>({preferences: preferencesReducer}));

export type AppDispatch = typeof store.dispatch


export default store;
