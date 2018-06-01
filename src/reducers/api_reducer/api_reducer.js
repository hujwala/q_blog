import { BLOG_DETAILS } from '../../actions/type'

const INITIAL_STATE = {
  details: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case BLOG_DETAILS: 
      return {...state, [action.payload.details]:action.payload.data};
    default :
      return state;
  }
}