import './App.css'
import Lottery from './Lottery'
import Button from './Button'

const App = () => {
  return (
    <>
    <h1>Lottery Winners!</h1>
    <Button></Button>
    <Lottery color="text-success" no='1'></Lottery>
    <Lottery color="text-primary" no='2'></Lottery>
    <Lottery color="text-info" no='3'></Lottery>
    <Lottery color="text-warning" no='4'></Lottery>
    <Lottery color="text-danger" no='5'></Lottery>
    </>
  )
}

export default App;