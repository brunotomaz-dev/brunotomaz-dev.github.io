import { BACK_END, FRONT_END, FUNDAMENTOS } from '../actions/actions';

const INITIAL_STATE = {
  fundamentos: [],
  frontEnd: [],
  backEnd: [],
};

function projectReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FUNDAMENTOS:
    return { ...state, fundamentos: action.payload };
  case FRONT_END:
    return { ...state, frontEnd: action.payload };
  case BACK_END:
    return { ...state, backEnd: action.payload };
  default:
    return state;
  }
}

export default projectReducer;
