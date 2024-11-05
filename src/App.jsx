
import { InputDefault } from './components/shared/UI/Inputs/inputs.jsx'
import './App.css'
import goh from "./assets/ghhbnjjj.jpg"
import Button from './components/shared/UI/Buttons/Button.jsx'


function App() {


  return (
    <>
    <InputDefault ph="Монолог 1" />
    <InputDefault ph="Монолог 2" />
    <InputDefault ph="Монолог 3" />
      <img src={goh} alt="" />
      <Button text="buy"/>
       <Button text="sell"/>
        <Button text="kill"/>
         <Button text="revive"/>
          <Button text="bring"/>
          <Button text="name"/>
          <Button text="win"/>
          <Button text="lost"/>
          <Button text="hit"/>
          <Button text="jump"/>


    </>
  )
}

export default App
