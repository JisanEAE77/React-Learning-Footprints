import Display from "./Display"
import ButtonSet from "./ButtonSet"

const Calculator = () => {
    const buttons = [
        ['C', 1, 2],
        ['+', 3, 4],
        ['-', 5, 6],
        ['*', 7, 8],
        ['/', 9, 0],
        ['=', '.']
    ]
    return (
        <>
        <h1>Calculator</h1>
        <Display />
        <ButtonSet rows={buttons} />
        </>
    )
}

export default Calculator;
