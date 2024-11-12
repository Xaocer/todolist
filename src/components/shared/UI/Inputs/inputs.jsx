import { useState } from "react";
import styles from "./inputs.module.css"


function HandleInput(element) {
    console.log("Что то ввели", element.target.value);
}
function HandleSelect(element) {
 console.log("Элемент выбран", );
}
    
const InputDefault = ({ ph  }) => {
    return <input onInput={HandleInput}
    onSelect={HandleSelect}
     type="text"
    placeholder={ph} />;
};
const InputPassword = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick =()=>{console.log("Не надо дядя");
        setIsVisible(!isVisible);
    };
     
    return (
    <div>
     <input type={isVisible == true ? "text": "password"}/>
     <button onClick={handleClick}>Показать пароль</button>
    </div>
    );
};

export { InputDefault, InputPassword };