import {CHANGE_APP_THEME} from './actions';


interface Action {
    type: string;
    payload: unknown
}

export interface AppState {
    preferences: PreferencesState
}
export type Theme = "DARK" | "LIGHT"

export interface PreferencesState  {
    theme: Theme
}
const initialState: PreferencesState  = {
    theme: "LIGHT"
}

export const preferencesSelector = (state: AppState) => state.preferences;

export default function Reducer(state: PreferencesState = initialState, {type, payload}: Action ): PreferencesState {


    console.log("reducer calling", type, payload);
    switch (type) {
        case CHANGE_APP_THEME:
            return {...state , theme: payload as Theme}
        default:
            return  state;
    }
}