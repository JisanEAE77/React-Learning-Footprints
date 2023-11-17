import "./App.css";
import ToDo from "./TODOAPP/ToDo";

const App = () => {
  const todolist = [
    {
      task: "Meeting with a client",
      date: "20/11/2023",
    },
    {
      task: "Need to get a hair cut",
      date: "23/11/2023",
    },
  ];

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
