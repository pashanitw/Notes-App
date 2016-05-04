import {
    SEARCH_NOTE,
    SET_MENU_STATUS,
    LOAD_INITAL_DATA,
    CREATE_NEW_NOTE,
    SET_USER_NAME,
    CLEAR_DATA
} from '../actions/notelist'
import Immutable from 'immutable'
import {AsyncStorage} from 'react-native'


export default function notelist(state = Immutable.Map({
    isMenuOpen: false,
    data: Immutable.Map()
}), action = {}) {
    switch (action.type) {
        case SEARCH_NOTE:
            return state.set('searchKey', action.key);
        case SET_MENU_STATUS:
            return state.set('isMenuOpen', action.status)
        case LOAD_INITAL_DATA:
            return state.set('data', Immutable.fromJS(action.data))

        case CREATE_NEW_NOTE:
            return state.mergeIn(['data'], action.data)
        case SET_USER_NAME:
            return state.set('username', action.username)
        case CLEAR_DATA:
            return Immutable.Map({
                isMenuOpen: false,
                data: Immutable.Map()
            })
        
        default:
            return state
    }
}