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
        default:
            return state;
    }
}

export default reducer;