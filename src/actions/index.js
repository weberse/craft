export const SET_COLORS = 'SET_COLORS'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'

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

export function changeContent(value) {
    console.log(value)
    return {
        type: CHANGE_CONTENT,
        value: value
    }
}