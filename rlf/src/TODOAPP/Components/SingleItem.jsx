import css from "./SingleItem.module.css"

const SingleItem = (props) => {
  return (
    <>
      <div className={`row my-3 ${css.lrow}`}>
        <div className="col-6">
          {props.task}
        </div>
        <div className="col-4">
          {props.date}
        </div>
        <div className="col-2">
          <button type="button" className=
          {`btn btn-danger ${css.tbutton}`}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;