/** @format */

import { useDispatch, useSelector } from "react-redux";
// import Buttons from "./Buttons";

import Todos from "../../components/Todos";
import { useEffect } from "react";
import { fetchTasks } from "./taskSlice";

//  * @format

// eslint-disable-next-line react/prop-types
const TasksView = ({ status }) => {
  const { isLoading, tasks, error } = useSelector((state) => state.tasks);
  const filteredTasks = tasks.filter((tasks) => tasks.status === status);
  const dispstch = useDispatch();
  // Calling asyncronusly api
  useEffect(() => {
    dispstch(fetchTasks());
  }, []);

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

export default TasksView;
