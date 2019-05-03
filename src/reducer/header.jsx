import { HEADER_BACKGROUND } from '../actions/types';

import parameters from '../assets/parameters';

const INITIAL_STATE = {
  backgroundHeader: parameters.bgMenuPrincipal,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HEADER_BACKGROUND:
      return { ...state, backgroundHeader: action.payload };
    default:
      return { ...state };
  }
};
