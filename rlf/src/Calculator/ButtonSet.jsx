import ButtonRow from "./ButtonRow";

const ButtonSet = ({ rows }) => {
  return (
    <>
      <div className="container">
        {rows.map((row) => (
          <ButtonRow values={row} />
        ))}
      </div>
    </>
  );
};

export default ButtonSet;
