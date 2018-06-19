import { BLOG_DETAILS } from "../type";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const blogDetails = () => {
  return (dispatch) => {
    var details = 'details';
    fetch('http://localhost:8080/rest/use',{
      method: "GET",
      headers: {
        "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdW5pbC5rcjEwMjRAZ21haWwuY29tIiwicm9sZSI6InF3aW5peCJ9.ijogU6btsCfux14d76x5Z9pz4xS2KB2TQ2_6lPveFdr0qyCPew5APmqM6Le6JFczjULNSYFGcm98-gmApgme3Q",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
      let data = responseJson
      dispatch({type: BLOG_DETAILS, payload: {details, data}})
    })
  }
}