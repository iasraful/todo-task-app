/** @format */

import axios from "axios";
import {
  GET_TASK_FAILED,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "../constant/taskConstant";

export const getTask = () => async (dispatch) => {
  dispatch({
    type: GET_TASK_REQUEST,
  });
  try {
    const res = await axios.get(
      "https://run.mocky.io/v3/7ea49dd5-22c7-4d06-a775-88b66261634a"
    );
    dispatch({ type: GET_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TASK_FAILED, payload: error.message });
  }
};
