import ButtonRow from "./ButtonRow";
import css from './ButtonSet.module.css'

const ButtonSet = ({ rows }) => {
  return (
    <>
      <div className={`container mt-2 ${css.buttonBox}`}>
        {rows.map((row) => (
          <ButtonRow values={row} />
        ))}
      </div>
    </>
  );
};

export default ButtonSet;
