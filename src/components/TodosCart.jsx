/** @format */

import { useDispatch, useSelector } from "react-redux";
// import Buttons from "./Buttons";
import Todos from "./Todos";
import { useEffect } from "react";
import { getTask } from "../redux/actions/taskAction";

//  * @format

// eslint-disable-next-line react/prop-types
const TodosCart = ({ status }) => {
  const { isLoading, task, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const filteredTasks = task.filter((tasks) => tasks.status === status);
  console.log(filteredTasks);
  // console.log(task);
  return (
    <div className="bg-green-100 p-4 w-1/3 border">
      <h2 className="text-slate-500 font-bold p-2 mb-8 border-solid border border-green-600">
        {status}
      </h2>
      {isLoading && (
        <h3 className=" text-green-500 text-center text-lg p-8">Loadding...</h3>
      )}
      {error && (
        <h3 className="text-red-600 text-center text-lg p-8">
          {error.message}
        </h3>
      )}

      {filteredTasks &&
        filteredTasks.map((tasks) => <Todos tasks={tasks} key={tasks.id} />)}
    </div>
  );
};

export default TodosCart;
