import React , { useState } from "react";

export default function TextForm(props) {
        const handleUpClick = ()=>{
          // console.log("Uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to Uppercase", "success");
        }

        const handleloClick = ()=>{
          // console.log("Lowercase was clicked" + text);
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to Lowercase", "success");
        }

        const  handleCopy = ()=>{
          var text = document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("The text has been copied", "success");
        }

        const handleOnChange = (event)=>{
          // console.log("On Change");
          setText(event.target.value)
        }

        const handleClearClick = ()=>{
          // console.log("Uppercase was clicked" + text);
          let newText = "";
          setText(newText)
          props.showAlert("The text has been cleared", "success");
        }

        const handleExtraSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
          props.showAlert("The Extra space has been removed", "success");
        }
        
          
   // Declare a new state variable, which we'll call "count"
  //  text is the state and 
  // setText is the function which can be used to change the value of text.
      const [text, setText] = useState('');

  // text = "new text"; //Wrong way to change the value of text or state. 
  // setText("new text"); //Correct way to change the state.

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
      <div className="mb-3" >
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      {/* mx-2 is the class of bootstrap to provide space in "x" */}
      {/* my-2 is the class of bootstrap to provide space in "y" */} 
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h4>Your text summary</h4> 
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text: "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
