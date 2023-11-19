import { useState } from "react";
import css from "./ToDoForm.module.css";

const ToDoForm = ({ handleAdd }) => {
  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const date = e.target.date.value;
    if (task.length > 0 && date.length > 0) {
      e.target.task.value = "";
      e.target.date.value = "";
    }

    handleAdd(task, date);
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div className="row">
          <div className="col-6">
            <input
              id="task"
              type="text"
              name="task"
              className={`${css.tinput}`}
              placeholder="Enter TODO Here"
            />
          </div>
          <div className="col-4">
            <input
              id="date"
              name="date"
              type="date"
              className={`${css.tinput}`}
            />
          </div>
          <div className="col-2">
            <button type="submit" className={`btn btn-success ${css.tbutton}`}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
