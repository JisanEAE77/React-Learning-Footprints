import ToDoForm from "./Components/ToDoForm";
import SingleItem from "./Components/SingleItem";
import AppName from "./Components/AppName";
import NullCheck from "./Components/NullCheck";
import { useState } from "react";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(null);

  const handleAdd = (task, date) => {
    if (task.length > 0 && date.length > 0) {
      const newTask = { task: task, date: date };
      const newToDoList = [...toDoList, newTask];
      setToDoList(newToDoList);
      setIsInputEmpty(null);
    } else {
      setIsInputEmpty(true);
    }
  };

  const handleDelete = (key) => {
    const first = toDoList.slice(0, key);
    const second = toDoList.slice(key + 1);

    const newToDoList = [...first, ...second];
    setToDoList(newToDoList);
    setIsInputEmpty(null);
  };

  return (
    <>
      <AppName />
      <ToDoForm handleAdd={handleAdd} />
      {isInputEmpty && (
        <NullCheck message="Fill up both the field of task and date to add task in your ToDo List" />
      )}
      {toDoList ? (
        !toDoList.length ? (
          <NullCheck message="Feel free to enjoy your Day, There is no checklist to do today!" />
        ) : (
          toDoList.map((todo, index) => (
            <SingleItem
              key={index}
              index={index}
              task={todo.task}
              date={todo.date}
              onDelete={handleDelete}
            />
          ))
        )
      ) : (
        <NullCheck message="Error Fetching Data! Please refresh the page" />
      )}
    </>
  );
};

export default ToDo;
