import css from "./SingleItem.module.css"

const SingleItem = (props) => {

  const handleDelete = () => {
    props.onDelete(props.index)
  }
  return (
    <>
      <div className={`row my-3 ${css.lrow}`}>
        <div className="col-6 bg-black text-white py-2 text-center">
          {props.task}
        </div>
        <div className="col-4 bg-info text-white py-2 text-center">
          {props.date}
        </div>
        <div className="col-2">
          <button onClick={handleDelete} className=
          {`btn btn-danger px-4 ${css.tbutton}`}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;