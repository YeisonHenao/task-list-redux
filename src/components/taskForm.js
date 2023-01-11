import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../feature/task/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const app = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      app(editTask(task));
    } else {
      app(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-6">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">
            Add Task
          </h5>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="title"
              required
            />
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={task.description}
              placeholder="description"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Save task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
