import Button from "./Button";
import LotteryList from "./LotteryList"

const Lottery = () => {
    return (
      <>
      <h1>Lottery Winners!</h1>
      <Button></Button>
      <LotteryList no='1' />
      <LotteryList no='2' />
      <LotteryList no='3' />
      <LotteryList no='4' />
      <LotteryList no='5' />
      </>
    )
  }

  export default Lottery;