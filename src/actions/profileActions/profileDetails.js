import { PROFILE_DETAILS } from "../type";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const profileDetails = (event) => { 
	return (dispatch) => {
    var profile_details = 'profile_details';
    fetch('http://localhost:8080/rest/user/updateUserBy/1',{
      method: "GET",
      headers: {
        "Authorisation": "Token " + read_cookie("auth_token"),
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(response) {
      return response.json();
      console.log("user", response.json())
    })
    .then((responseJson) => {
      let data = responseJson
      dispatch({type: PROFILE_DETAILS, payload: {profile_details, data}})
    })
  }	
}	