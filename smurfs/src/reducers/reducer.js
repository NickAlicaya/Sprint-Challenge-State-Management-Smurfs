const initialState = {
    smurfs: []
}

export function reducer(state=initialState,action) {
    switch(action.type) {
        case "GET_SMURFS":
            return {
                smurfs: action.payload
            }
        case "POST_SMURFS":
            return {
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            } 
        default:
            return state;
    }
}