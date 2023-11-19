/** @format */

import {
  GET_TASK_FAILED,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "../constant/taskConstant";

const initialState = {
  isLoading: false,
  task: [],
  error: null,
};

const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASK_SUCCESS:
      return {
        isLoading: false,
        task: action.payload,
        error: null,
      };
    case GET_TASK_FAILED:
      return {
        isLoading: false,
        task: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducers;
