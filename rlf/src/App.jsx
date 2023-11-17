import "./App.css";
import ToDo from "./TODOAPP/ToDo";

const App = () => {
  const todolist = null

  return (
    <>
      <center>
        <div className="container">
          <ToDo todolist={todolist}/>
        </div>
      </center>
    </>
  );
};

export default App;
