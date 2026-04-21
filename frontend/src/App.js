import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://13.233.247.157:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Task Manager</h1>
      {tasks.length === 0 ? (
        <p>No tasks loaded</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            {task.task} - {task.status}
          </div>
        ))
      )}
    </div>
  );
}

export default App;