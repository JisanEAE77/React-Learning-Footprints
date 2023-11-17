const Lottery = (props) => {

    let random = Math.random() * 200;

    return (
        <>
            <h2>Winner {props.no}: Lottery No - {Math.floor(random)}</h2>
        </>
    )
}

export default Lottery;