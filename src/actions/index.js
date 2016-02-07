export const SET_COLORS = 'SET_COLORS'
export const CHANGE_COLOR = 'CHANGE_COLOR'

export function set(value) {
    return {
        type: SET_COLORS,
        payload: value
    }
}

export function changeColor(color) {
    return {
        type: CHANGE_COLOR,
        value: color
    }
}