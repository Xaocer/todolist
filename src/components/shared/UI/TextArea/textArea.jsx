const TextArea = ({placeholder,bgColor,textsize }) =>{
    return (
    <textarea 
     style={{background: bgColor, fontSize: textsize}}
     placeholder={placeholder}
     name=""
     id=""
    ></textarea>
    );
};






export { TextArea }
