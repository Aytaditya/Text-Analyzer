import React, { useState } from 'react'


export default function Textform(props) {
    const [text, settext] = useState('')
    //text="new text" //wrong way to change the text


    //function to make it to uppercase
    function handleup() {
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    //function to make it to lowercase
    function handledown(){
        let newtext1=text.toLowerCase();
        settext(newtext1)
    }
    //function for reset
    function handleReset(){
        let newtext2="Enter Text";
        settext(newtext2)
    }
    //function to trim space
    function handletrim(){
        //let newtext3=text.split(" ").join('');    //another way to delete space
        let newtext3=text.replaceAll(' ','');
        settext(newtext3);
    }
    //function to copy
    function handlecopy(){
        var text=document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    //function for writing in textarea
    function handleonchange(event) {
        settext(event.target.value)

    }
    

    return (
        <>
            <div className="container">
                <h2 class="my-3" style={{color: props.mode==='dark'?'white':'black'}}><em>{props.heading}</em></h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='white'?'dark':'white'}} id="mybox" rows="12"></textarea>
                </div>
                <button className="btn btn-success" onClick={handleReset}>Reset Text</button>
                <button className="btn btn-success mx-1 my-1" onClick={handleup}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1 my-1" onClick={handledown}>Convert to Lowercase</button>
                <button className="btn btn-success mx-1 my-1" onClick={handletrim}>Trim Space</button>
                <button className="btn btn-success mx-1 my-1" onClick={handlecopy}>Copy</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>fun fact: {0.008*text.split(" ").length} minutes can be taken to read the textarea for an average user</p>
            </div>
        </>

    )
}
