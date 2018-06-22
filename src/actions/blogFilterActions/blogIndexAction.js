import { BLOG_DETAILS } from "../type";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const blogDetails = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/rest/blogs',{
      method: "PUT",
      headers: {
        "authorization": "Bearer " + read_cookie("auth_token"),
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
       dispatch({type: BLOG_DETAILS, payload: responseJson })
    })
  }
}