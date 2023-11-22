/** @format */

// import TodosCart from "./components/TodosCart";
import TasksView from "./features/task/TasksView";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold text-slate-700 p-2">
        {" "}
        Tasks List
      </h1>
      <div className="flex md:flex-row sm:flex-col justify-center rounded-lg p-8 space-x-4">
        <TasksView status="Todo" />
        <TasksView status="In-Progress" />
        <TasksView status="Done" />
      </div>
    </div>
  );
};

export default App;
