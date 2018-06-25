import { PROFILE_DETAILS } from "../type";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const profileDetails = (event) => { 
	return (dispatch) => {
    fetch('http://localhost:8080/user/1',{
      method: "GET",
      headers: {
        "Authorisation": "Token " + read_cookie("auth_token"),
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
      dispatch({type: PROFILE_DETAILS, payload: responseJson})
    })
  }	
}	