import { BLOG_UPDATE } from "../type";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const blogUpdate = (event) => {
  return (dispatch) => {
    fetch('http://localhost:8080/rest/blogs',{
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
      var data = responseJson.filter((el) =>
        el.title.toLowerCase().indexOf(event.toLowerCase()) > -1
       );
      dispatch({type: BLOG_UPDATE, payload: data})
    })
  }
}