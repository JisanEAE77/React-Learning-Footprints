import ToDoForm from "./Components/ToDoForm";
import SingleList from "./Components/SingleList";
import AppName from "./Components/AppName";
import "./ToDo.css"

const ToDo = () => {
  return (
    <>
      <AppName />
      <ToDoForm />
      <SingleList task="Meeting With Client" date="20/11/2023" />
      <SingleList task="Need to get a Hair Cut" date="23/11/2023" />
    </>
  );
};

export default ToDo;
