import { BLOG_UPDATE } from "../type";

export const blogUpdate = (event) => {
  return (dispatch) => {
    var details = 'details';
    fetch('http://localhost:3000/example.json')
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
      var data = responseJson.data.filter((el) =>
        el.genre.toLowerCase().indexOf(event.toLowerCase()) > -1
       );
      data = {data}
      dispatch({type: BLOG_UPDATE, payload: {details, data}})
    })
  }
}