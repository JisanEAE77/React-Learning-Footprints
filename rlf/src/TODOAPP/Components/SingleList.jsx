const SingleList = (props) => {
  return (
    <>
      <div className="row my-3 lrow">
        <div className="col-6">
          {props.task}
        </div>
        <div className="col-4">
          {props.date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleList;