const LotteryList = (props) => {

    let random = Math.random() * 200;

    return (
        <>
            <h2 className={props.color}>Winner {props.no}: Lottery No - {Math.floor(random)}</h2>
        </>
    )
}

export default LotteryList;