import ToDoForm from "./Components/ToDoForm";
import SingleItem from "./Components/SingleItem";
import AppName from "./Components/AppName";
import NullCheck from "./Components/NullCheck";

const ToDo = ({ todolist }) => {
  console.log(todolist);
  return (
    <>
      <AppName />
      <ToDoForm />
      {todolist ? (
        !todolist.length ? (
          <NullCheck message="Feel free to enjoy your Day, There is no checklist to do today!" />
        ) : (
          todolist.map((todo) => (
            <SingleItem task={todo.task} date={todo.date} />
          ))
        )
      ) : (
        <NullCheck message="Error Fetching Data! Please refresh the page" />
      )}
    </>
  );
};

export default ToDo;
