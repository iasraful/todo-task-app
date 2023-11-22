/** @format */

import Buttons from "./Buttons";
const Todos = ({ tasks }) => {
  const { title, description } = tasks;

  return (
    <>
      <div className="border border-lime-900 p-2 my-2 h-40">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-slate-700">{description} </p>
      </div>
      <Buttons task={tasks} />
    </>
  );
};

export default Todos;
