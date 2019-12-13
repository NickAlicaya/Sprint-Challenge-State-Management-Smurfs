import axios from "axios";

export const POST_SMURFS = "POST_SMURFS";

export function postSmurfs(formData) {
    return dispatch => {
        dispatch({type: POST_SMURFS, payload:formData})
        axios.post("http://localhost:3333/smurfs",formData)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log("POST ERROR",err)
        })
    }
}