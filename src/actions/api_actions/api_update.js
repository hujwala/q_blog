import { BLOG_UPDATE } from "../type";

export const blogUpdate = (e) => {
  return (dispatch) => {
    var details = 'details';
    fetch('http://localhost:3000/example.json')
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
      let data = []
      responseJson.data.map(function(item){
        if(item.genre.toLowerCase().indexOf(e.toLowerCase())!=-1){
          data.push(item)
          data = {data}
          console.log('new blog_data',data)
        }
      })
      dispatch({type: BLOG_UPDATE, payload: {details, data}})
    })
  }
}