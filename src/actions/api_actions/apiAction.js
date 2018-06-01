import { BLOG_DETAILS } from "../type";

export const blogDetails = () => {
  return (dispatch) => {
    var details = 'details';
    fetch('http://localhost:3000/example.json')
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
      let data = responseJson
      dispatch({type: BLOG_DETAILS, payload: {details, data}})
    })
  }
}