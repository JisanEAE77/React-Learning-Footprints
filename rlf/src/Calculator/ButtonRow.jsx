import Button from "./Button";

const ButtonRow = ({ values }) => {
  return (
    <>
      <div className="row">
        {values.map((value) => (
          <Button value={value} />
        ))}
      </div>
    </>
  );
};

export default ButtonRow;
