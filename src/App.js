import "./App.css";
import { useState } from "react";
import AddTask from "./Components/Addtask/Addtask";
import ListTask from "./Components/ListTask/ListTask";
import FilterTask from "./Components/FilterTask/FilterTask";
function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  console.log(done, unDone);

  return (
    <div>
      <AddTask />
      <div style={{ textAlign: "center" }}>
        <FilterTask setDone={setDone} setUndone={setUndone} />
      </div>

      <ListTask done={done} unDone={unDone} />
    </div>
  );
}

export default App;
