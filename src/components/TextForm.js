import React, { useState } from 'react'




export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("uppercase of clicked",text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLowclick = () => {
    // console.log("uppercasse of clicked",text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleclear = () => {
    //It is is clear the text
    let newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy = () => {
    //It is is clear the text
    var text =document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }
  const handleonChange = (event) => {
    //console.log(" handle on change ");
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
     let newText =text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Extra spaces removed", "success");
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      
          <h1>{props.heading}</h1>
          <div className="mb-3"  >
            <textarea className="form-control" value={text} onChange={handleonChange}style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': '#042743'}} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>convert To UpperCase</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLowclick}>convert To LowerCase</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra space</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>Your Text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} character</p>
          <p>{0.008 * text.split("").length}Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </>
  )
}


