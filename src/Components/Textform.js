import React, { useState }  from 'react'


export default function Textform(props) {
  
  const handleupclick = () =>{
    console.log("uppercase is clicked");
     let newtext=text.toUpperCase();
     setText(newtext);
     props.showAlert("convert to uppercase","succuse")
  }
  const handledownclick = () =>{
    console.log("Lowercase is clicked");
     let newtext=text.toLowerCase();
     setText(newtext);
     props.showAlert("convert to lowercase","succuse")
  }
  const handlereset = () =>{
    console.log("Reset");
     let newtext='';
     setText(newtext);
  }
  const hanldecopy = () =>{
    console.log("I am copy");
    var text=document.getElementById("mybox");
    text.select();
     //text.setselectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
     alert("Successfully copied the text");
  }
  const handleonchange=(event)=>{
    console.log("onchange"); 
    setText(event.target.value);
    //props.showAlert("")
  }
  const [text, setText] = useState('enter text here');
  return (
    <>
      <h1>{props.heading} </h1>
<div className="container">
  {
  <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>}
  <button className="btn btn-primary mx-1" onClick = {handleupclick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick = {handledownclick} >Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick = {handlereset} >Reset Text</button>
  <button className="btn btn-primary " onClick = {hanldecopy} >copy Text</button>
</div>
<div className="container">
  <h2>Your text summary</h2>
  <p>{text.split (" ").length} words and {text.length} charecters </p>
  <p>{0.008*text.split (" ").length} Minuts read</p>
  <h2>previwe</h2>
  <p>{text}</p>
</div>
    </>
  )
}
