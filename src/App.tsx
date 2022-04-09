import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./state/store";
import {CHANGE_APP_THEME} from "./state/actions";
import {preferencesSelector} from "./state/reducer";
import logo from './logo.svg';
import './App.css';

function App() {

    const dispatch = useDispatch<AppDispatch>();
    const {theme} = useSelector(preferencesSelector);

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

export default App;
