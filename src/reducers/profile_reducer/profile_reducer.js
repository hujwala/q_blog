import { PROFILE_DETAILS } from '../../actions/type'

const INITIAL_STATE = {
  profile_details: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PROFILE_DETAILS: 
      return {...state, [action.payload.details]:action.payload.data};
    default :
      return state;
  }
}