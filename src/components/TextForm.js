import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted  to upper case","Success");


    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }

    
    
  return (
<>
  
<div className={`container text-${props.mode==='dark'?'white':'black'}`} >
 <div className="mb-3">
   <h1>{props.heading}</h1> 
  
     <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8">
    
     </textarea>



  </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert TO upperCase</button>
</div>
<div className={`container my-3 text-${props.mode==='dark'?'white':'black'}`}>
    <h1>Your summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*text.length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>


</>
    
  )
}
