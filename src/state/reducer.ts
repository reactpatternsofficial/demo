import {CHANGE_APP_THEME} from './actions';


interface Action {
    type: string;
    payload: unknown
}

export interface AppState {
    preferences: PreferencesState
}
type Theme = "DARK" | "LIGHT"

export interface PreferencesState  {
    theme: Theme
}
const initialState: PreferencesState  = {
    theme: "DARK"
}

export const preferencesSelector = (state: AppState) => state.preferences;

export default function Reducer(state: PreferencesState = initialState, {type, payload}: Action ): PreferencesState {

    switch (type) {
        case CHANGE_APP_THEME:
            return {...state , theme: payload as Theme}

        default:
            return  state;
    }
}