/** @format */

const Todos = ({ tasks }) => {
  // eslint-disable-next-line react/prop-types
  // console.log(props.tasks.title);
  return (
    <div className="border border-lime-900 p-2 my-2 h-40">
      {/* <h3 className="font-semibold">{tasks.title}</h3> */}
      <p className="text-slate-700">{tasks.title} </p>
    </div>
  );
};

export default Todos;
