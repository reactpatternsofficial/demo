import React from 'react';
import {AppDispatch} from "./state/store";
import {CHANGE_APP_THEME} from "./state/actions";
import {AppState} from "./state/reducer";
import {connect} from "react-redux"
import logo from './logo.svg';
import './App.css';

interface AppProps extends AppState{
    dispatch: AppDispatch
}
function App(props: AppProps) {

    const {preferences:{theme}, dispatch} =props;

    const switchTheme = ()=> {
        dispatch({type: CHANGE_APP_THEME, payload: theme === "LIGHT" ? "DARK": "LIGHT" });
    }
    return (
        <div className={theme} >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React patterns official
                </p>
                <input type="button" value="switch theme" onClick={switchTheme}/>
            </header>
        </div>
    );
}
const mapStateToProps = (state: AppState) => ({  preferences: state.preferences});
export default connect(mapStateToProps)(App);
