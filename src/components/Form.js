import React,{useState} from "react"
export default function Form(props){
   
    const foot ={
        textAlign:"center",
        margin:"68vw 0 5vw 0"
    }
    const handleUpperCase =(event)=>{
        // console.log("clicked");
        if(text===""){
            props.showAlert("warning","! Please Enter Some Text To Manipulate")
        }else{
        const NewText=text.toUpperCase();
        setInput(NewText);
        props.showAlert("success","! Converted to UpperCase")
    }
}
    function textClear(){
        if(text===""){
            props.showAlert("warning","! Please Enter Some Text To Clear")
        }else{
        setInput("");
        props.showAlert("success","! Text Cleared")
    }
}
    // function countVowels(){
        //     for(let i=0;i<text.length;i++){
            //         let count=0;
            //          if(text.charAt(i)==="a" || text.charAt(i)==="e" || text.charAt(i)==="i" || text.charAt(i)==="o" || text.charAt(i)==="u")
            //          {
                //              count++;
                //          }else return count;
                //          console.log(count)
                //      }
                // }
                const extraSpaces=()=>{
                    if(text===""){
                        props.showAlert("warning","! Please Enter Some Text To Manipulate")
                    }else{
                    let newText=text.split(/[ ]+/);
                    setInput(newText.join(" "));
                    props.showAlert("success","! Extra Spaces Has been removed")
                }
            }
                const copy=()=>{
                    if(text===""){
                        props.showAlert("warning","! Please Enter Some Text To Copy it")
                    }else{
                    let clip=document.getElementById("textBox")
                    clip.select();
                    navigator.clipboard.writeText(clip.value);
                    props.showAlert("success","! Copied to Clipboard Successfully")
                }
            }
                function handleLowerCase(){
                    if(text===""){
                        props.showAlert("warning","! Please Enter Some Text To Manipulate")
                    }else{
                    const NewText=text.toLowerCase();
                    setInput(NewText);
                    props.showAlert("success","! Converted to LowerCase")
    }
}
   
    const changeText=(event)=>{
        // console.log("yes")
        setInput(event.target.value);
    }
    const [text,setInput]=useState("");
    let myStyle={
        color:"white",
        backgroundColor:"black"
    }
return(
<>
<div className="container   mb-3">
 
  <textarea className="form-control border border-dark  " style={myStyle} placeholder="Enter your text here" value={text} onChange={changeText} id="textBox"  col="3" rows="5"></textarea>
</div>
<div className="container">
<button className="btn btn-outline-dark mx-1 my-1" onClick={handleUpperCase}>Upper Case</button>
<button className="btn btn-outline-dark mx-1 my-1" onClick={handleLowerCase}>Lower Case</button>
<button className="btn btn-outline-dark mx-1 my-1" onClick={copy}>Copy</button>
<button className="btn btn-outline-dark mx-1 my-1" onClick={extraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-outline-dark mx-1 my-1" onClick={textClear}>Clear</button>
</div>
<div className="container my-4">
    <h4 className="text-center">Summary</h4>
    <p>Words : {text.split(" ").length-1} , Characters : {text.length} & Sentences : {text.split(".").length-1}
    <br />Time Taken To Read : {0.008*text.split(" ").length} Minutes </p>
    
    </div>
    <div className="border rounded border-dark bg-black text-white container">
        <h4 className="text-center">Preview</h4>
<p >{text}</p>
    </div>
    <footer style={foot}>
    &copy;Copyright | <a href="https://www.devdaim.tech">DevDaim</a>
  </footer>
</>
    );
}