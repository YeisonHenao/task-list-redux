import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../feature/task/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header className="text-center">
        <h1 className="text-2xl">
          Tasks{" "}
          <span className="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {tasks.length}
          </span>{" "}
        </h1>
        <Link
          className="text-blue-600 underline underline-offset-1"
          to={"/create-task"}
        >
          Create task
        </Link>
      </header>
      {tasks.map((task) => (
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 mx-5 my-5"
          key={task.id}
        >
          <div className="space-y-4">
            <h3 className="text-4xl text-white text-center capitalize ">{task.title}</h3>
            <p className="mb-3 italic text-gray-400">{task.description}</p>
          </div>

          <div className="flex justify-between mt-5">
            <Link
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to={`/edit-task/${task.id}`}
            >
              Edit task
            </Link>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => handleDelete(task.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
