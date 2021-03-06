import { LOGIN_START, LOGIN_SUCCESS, FETCH_FRIENDS_FAILURE, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS } from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

function reducer(state = initialState, action){
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: '', 
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friends: action.payload
            }
        default:
            return state;
        }
}


export default reducer;