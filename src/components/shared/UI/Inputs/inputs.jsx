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
export { InputDefault };