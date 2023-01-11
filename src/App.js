import TaskList from "./components/taskList";
import TaskForm from './components/taskForm'
import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<TaskForm />} />
        <Route path="/edit-task/:id" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
