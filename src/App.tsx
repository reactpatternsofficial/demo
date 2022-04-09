import React from 'react';
import {AppDispatch} from "./state/store";
import {CHANGE_APP_THEME} from "./state/actions";
import {AppState, PreferencesState} from "./state/reducer";
import {connect} from "react-redux"
import logo from './logo.svg';
import './App.css';

interface AppProps extends PreferencesState{
    dispatch: AppDispatch;
}
class App extends React.Component<AppProps, PreferencesState>{
    constructor(props: any) {
        super(props);
        this.state= {theme: props.theme};
    }
    switchTheme = () => {
        this.props.dispatch({type: CHANGE_APP_THEME, payload: this.state.theme==="LIGHT"? "DARK": "LIGHT"});
    }
    componentDidUpdate(prevProps: Readonly<PreferencesState>, prevState: Readonly<PreferencesState>, snapshot?: any) {
        if (this.props.theme !== prevProps.theme) {
            this.setState({theme: this.props.theme});
        }
    }
    render() {
        return (
            <div className={this.state.theme} >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        React patterns official
                    </p>
                    <input

                        type="button"
                        value={`swith theme ${this.state.theme}`}
                        onClick={()=> {this.switchTheme()}}/>
                </header>
            </div>
        );
    }
}
const mapStateToProps = (state: AppState) => (state.preferences);
export default connect(mapStateToProps)(App);


