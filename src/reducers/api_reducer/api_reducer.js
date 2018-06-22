import { BLOG_DETAILS } from '../../actions/type'
import { BLOG_UPDATE } from '../../actions/type'

const INITIAL_STATE = {
  details: []
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type){

    case BLOG_DETAILS: 
      return {...state, details: action.payload};

    case  BLOG_UPDATE:
     return {...state, details: action.payload};

    default :
      return state;
  }
}