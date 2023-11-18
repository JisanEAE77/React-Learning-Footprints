import Display from "./Display"

const Calculator = () => {
    buttons = [
        ['C', 1, 2],
        ['+', 3, 4],
        ['-', 5, 6],
        ['*', 7, 8],
        ['/', 9, 0],
        ['=', '.']
    ]
    return (
        <>
        <Display />
        <ButtonSet rows={buttons} />
        </>
    )
}

export default Calculator,
