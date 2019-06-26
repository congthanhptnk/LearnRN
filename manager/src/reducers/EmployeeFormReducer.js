import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state=INITIAL_STATE, action) => {
  const { prop, value } = action.payload;

  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [prop]: value };
    default:
      return state;
  }
};
