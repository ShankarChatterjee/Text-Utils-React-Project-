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

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        debugger;
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
        <div className="container" style = {{color: props.mode === 'dark'? 'white':'#101235'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='dark'? 'grey': 'white' , color: props.mode==='dark'? 'white':'#101235'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'? 'white':'#101235'}}>
        <h1>Your text Summery</h1>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008* (text.split(" ").length)} Minuites read</p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text: "Enter something in the Text Box above to preview here "}</p>
        </div>
       
    </>
    
  )
}
