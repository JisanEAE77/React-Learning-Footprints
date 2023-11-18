import { useState } from "react";
import css from "./ToDoForm.module.css";

const ToDoForm = ({ handleAdd }) => {
  const addTask = () => {
    const task = document.getElementById("task").value;
    const date = document.getElementById("date").value;
    if (task.length > 0 && date.length > 0) {
      document.getElementById("task").value = "";
      document.getElementById("date").value = ";";
    }

    handleAdd(task, date);
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-6">
            <input
              id="task"
              type="text"
              className={`${css.tinput}`}
              placeholder="Enter TODO Here"
            />
          </div>
          <div className="col-4">
            <input id="date" type="date" className={`${css.tinput}`} />
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={addTask}
              className={`btn btn-success ${css.tbutton}`}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
