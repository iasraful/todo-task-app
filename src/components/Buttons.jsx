/** @format */

import { useDispatch, useSelector } from "react-redux";

import { moveTask } from "../features/task/taskSlice";

const Buttons = ({ task }) => {
  const dispatch = useDispatch();

  const handleMove = (newStatus) => {
    dispatch(moveTask({ id: task.id, status: newStatus }));
  };
  return (
    <div className="space-x-2">
      <button
        onClick={() => handleMove("Todo")}
        className={`px-2 py-1 rounded-lg ${
          task.status === "Todo"
            ? "bg-gray-300"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        disabled={task.status === "Todo"}
      >
        Todo
      </button>
      <button
        onClick={() => handleMove("In-Progress")}
        className={`px-2 py-1 rounded-lg  ${
          task.status === "In-Progress"
            ? "bg-gray-300"
            : "bg-yellow-500 hover:bg-yellow-600 text-white"
        }`}
        disabled={task.status === "In-Progress"}
      >
        In Progress
      </button>
      <button
        onClick={() => handleMove("Done")}
        className={`px-2 py-1 rounded-lg  ${
          task.status === "Done"
            ? "bg-gray-300"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
        disabled={task.status === "Done"}
      >
        Done
      </button>
    </div>
  );
};

export default Buttons;
