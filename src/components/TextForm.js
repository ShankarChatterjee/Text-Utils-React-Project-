//shortcut for react function based component : rfc
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLOClick = ()=>{
         //console.log("LowerCase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
    }

    const handleClearClick = ()=>{
        //console.log("LowerCase was clicked" + text);
        let newText = "";
        setText(newText);
   }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container">
        <h1>Your text Summery</h1>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008* (text.split(" ").length)} Minuites read</p>
        <h1>Preview</h1>
        <p>{text}</p>
        </div>
       
    </>
    
  )
}
