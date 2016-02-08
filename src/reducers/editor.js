import { CHANGE_COLOR, CHANGE_CONTENT, SET_COLORS } from '../actions'
import Styles from 'styles/index'

var patterns = {
    "colors": {
        "business": {
            "dark": "#3e3c42",
            "dark2": "#3e3c42",
            "light": "white",
            "brand": "#f9276f",
            "primary": "#428bca",
            "success": "#5cb85c",
            "warning": "#d9534f",
            "info": "#ffdd8a"
        },
        "web": {
            "dark": "#205081",
            "dark2": "#205081",
            "light": "#fff",
            "brand": "#BA2A29",
            "primary": "#3b73af",
            "success": "#707070",
            "warning": "#d9534f",
            "info": "#ffd351"
        }
    }
};

var contentTypes = ['page', 'pool'];


const initialState = {
    colorPattern: "business",
    contentType: 'page',
    patterns: patterns,
    contentTypes: contentTypes,
    Styles: Styles(patterns.colors.business)
};

export default function editor(state = initialState, action = '') {
    switch (action.type) {
        case SET_COLORS:
            return action.payload
        case CHANGE_COLOR:
            return Object.assign({}, state, {
                colorPattern: action.value,
                Styles: Styles(patterns.colors[action.value])
            });
        case CHANGE_CONTENT:
            return Object.assign({}, state, {
                contentType: action.value
            });
        default:
            return initialState;
    }
}
