
import { InputDefault, InputPassword } from './components/shared/UI/Inputs/inputs.jsx'
import './App.css'
import goh from "./assets/ghhbnjjj.jpg"
import Button from './components/shared/UI/Buttons/Button.jsx'
import { TextArea } from './components/shared/UI/TextArea/textArea.jsx'
import ProjectsSidebar from './components/shared/ProjectsSidebar/ProjectsSidebar.jsx'



function App() {


  return (
    <>
    <InputDefault ph="Монолог 1" />
    <InputDefault ph="Монолог 2" />
    <InputDefault ph="Монолог 3" />
    <InputPassword  />
      <TextArea placeholder="Текст" bgColor="yellow" textsize="40px" />
      <TextArea placeholder="Текст 2" bgColor="blue" textsize="120px" />
      <TextArea placeholder="Текст 3"  bgColor="black"textsize="1px"/>
      <img src={goh} alt="" />
      
      <ProjectsSidebar/>
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
  );
};

export default App
