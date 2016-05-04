import {AsyncStorage} from 'react-native'
import moment from 'moment'

export const SEARCH_NOTE = 'SEARCH_NOTE'
export const SET_MENU_STATUS = 'SET_MENU_STATUS'
export const LOAD_INITAL_DATA = 'LOAD_INITAL_DATA'
export const CREATE_NEW_NOTE = 'CREATE_NEW_NOTE'
export const SET_USER_NAME = 'SET_USER_NAME'
export const CLEAR_DATA='CLEAR_DATA'


export const searchNote = (searchKey)=> {
    return {
        type: SEARCH_NOTE,
        key: searchKey
    }
};

export const setMenuStatus = (status)=> {
    return {
        type: SET_MENU_STATUS,
        status: status
    }
};
export const loadInitialData = (data)=> {
    return {
        type: LOAD_INITAL_DATA,
        data: data
    }
};
export const createNewNote = (data)=> {

    return function (dispatch) {
        let id = new Date().getTime();
        let note = {};
        data['createdAt'] = moment().format();
        note[id] = data;
        AsyncStorage.mergeItem('notelist', JSON.stringify(note))
            .then(()=> {
                dispatch({
                    type: CREATE_NEW_NOTE,
                    data: note
                })
            })
            .catch(()=>console.log("error occured"))
    }
};
export const setUsername = (username, navigator)=> {
    return function (dispatch) {
        AsyncStorage.clear()
            .then(()=> {
                AsyncStorage.setItem('username', username)
                    .then(()=> {
                        dispatch({
                            type: SET_USER_NAME,
                            username
                        })
                        navigator.push({
                            name: 'NoteList'
                        })
                    })
                    .catch((err)=>console.log('error occured ' + err))
            })

    }
}
export const clearData=()=>{
    return {
       type:CLEAR_DATA
    }
}