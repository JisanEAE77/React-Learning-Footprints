import './App.css'
import Lottery from './Lottery'
import Button from './Button'

const App = () => {
  return (
    <>
    <h1>Lottery Winners!</h1>
    <Button></Button>
    <Lottery no='1'></Lottery>
    <Lottery no='2'></Lottery>
    <Lottery no='3'></Lottery>
    <Lottery no='4'></Lottery>
    <Lottery no='5'></Lottery>
    </>
  )
}

export default App;