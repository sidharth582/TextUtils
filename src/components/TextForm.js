import React, {useState}from 'react'

export default function TextForm(props) {

const handleUpClick= ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showalert("converted to upperCase","success");
}

const handleClearclick=()=>{
let newText='';
setText(newText);
 props.showalert("text cleared","success");
}

const handleCopy=()=>{
navigator.clipboard.writeText(text);
document.getSelection().removeAllRanges();
 props.showalert("text copied! ","success");
}

const handleExtraSpaces=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "))
 props.showalert("extra space removed! ","success");
}

const handleLowclick=()=>{
let newText=text.toLowerCase();
setText(newText);
props.showalert("converted to lowerCase","success");
}

const handleOnChange=(event) =>{
setText(event.target.value)
}
// const [text,setText] = useState('enter text');
const [text,setText] = useState('');

    return (
        <>
        <div className="container my-2" style={{color: props.mode==='dark' ? 'white':'#1a2253'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#405a6e':'white' , color: props.mode==='dark' ? 'white':'#1a2253'}} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>

        <div className="summary mx-4" rows="8" style={{color: props.mode==='dark' ? 'white':'#1a2253'}}>
        <h3 > your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words ,{text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text:"Nothing to preview! "}</p>
        </div>
        </>
    )
}
