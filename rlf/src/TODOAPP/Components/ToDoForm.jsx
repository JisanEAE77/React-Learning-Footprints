import css from "./ToDoForm.module.css"

const ToDoForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input type="text" className={`${css.tinput}`} placeholder="Enter TODO Here" />
        </div>
        <div className="col-4">
          <input type="date"  className={`${css.tinput}`} />
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-success ${css.tbutton}`}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoForm;
