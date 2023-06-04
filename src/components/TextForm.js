//shortcut for react function based component : rfc
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !","success");
    }

    const handleLOClick = ()=>{
         //console.log("LowerCase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase !","success");
    }

    const handleClearClick = ()=>{
        //console.log("LowerCase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared !","success");
   }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        //var text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Coppied to clipboard !","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success");
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <>
        <div className="container" style = {{color: props.mode === 'dark'? 'white':'#101235'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='dark'? '#13466e': 'white' , color: props.mode==='dark'? 'white':'#101235'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert To Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLOClick}>Convert To Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'? 'white':'#101235'}}>
        <h1>Your text Summery</h1>
        {/* /\s+/ This a regular expression to handle new line and space together for word count*/}
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words, {text.length} Characters</p>
        <p>{0.008* (text.split(" ").filter((element)=>{return element.length !==0}).length)} Minuites read</p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text: "Nothing to Preview!"}</p>
        </div>
       
    </>
    
  )
}
