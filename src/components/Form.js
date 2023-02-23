import React, { useState, useEffect } from "react";
export default function Form(props) {
     
  const [text, setInput] = useState("");
  const [uText, setText] = useState("");
  useEffect(() => {
    setText(uText);

    return () => {
      console.log("Render exitted");
    };
  }, [uText]);
  
  const range = 0.008 * text.split(" ").length - 0.008;

  const myStyle = {
    color: "white",
    backgroundColor: "black",
  };

    const foot = {
    textAlign: "center",
    margin: "68vw 0 5vw 0",
    textDecoration: "none",
    color:"#5af3df"
  };

  const changeText = (event) => {
    // console.log("yes")
    setText(event.target.value);
    setInput(uText);
  };
 
  //fucntion to convert text to UpperCase
  const handleUpperCase = (event) => {
    // console.log("clicked");
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      const NewText = text.toUpperCase();
      setInput(NewText);
      props.showAlert("success", "! Converted to UpperCase 🤗");
    }
  };
 
   //fucntion to convert text to LowerCase
  function handleLowerCase() {
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      const NewText = text.toLowerCase();
      setInput(NewText);
      props.showAlert("success", "! Converted to LowerCase 🤗");
    }
  };

   //fucntion to copy text to clipboard
  const copy = () => {
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Copy it 🙄");
    } else {
      let clip = document.getElementById("textBox");
      clip.select();
      navigator.clipboard.writeText(clip.value);
      props.showAlert("success", "! Copied to Clipboard Successfully 🤗");
    }
  };
  
   //fucntion to Capitalize text  
  function capitalize() {
    if (text === "") {
        props.showAlert("warning", "! Please Enter Text To Capitalize it 🙄");
    } else {
        const arr = text.split(" ");
        
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str = arr.join(" ");
        setInput(str);
        props.showAlert("success","! Capitalized successfully 🤗");
}
};

 //fucntion to remove Extra Spaces
  const extraSpaces = () => {
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      let newText = text.split(/[ ]+/);
      setInput(newText.join(" "));
      props.showAlert("success", "! Extra Spaces Has been removed 🤗");
    }
    if (text.split(/[ ]+/).length === 2) {
      props.showAlert("warning", "! No Extra Space to be Removed");
    }
  }; 

   //fucntion to clear the text
  function textClear() {
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Clear 🙄");
    } else {
      setInput("");
      setText("");
      props.showAlert("success", "! Text Cleared 🤗");
    }
  };
 
  

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


  return (
    <>
      <div className="container   mb-3">
        <textarea
          className="form-control border border-dark  "
          style={myStyle}
          placeholder="Enter your text here"
          value={uText}
          onChange={changeText}
          id="textBox2"
          col="3"
          rows="3"
        ></textarea>

        <div className="container my-4">
          <h4 className="text-center text-white">Summary</h4>
          <p className="text-white">
            Words : {text.split(" ").length - 1} <br />
            Characters : {text.length} <br />
            Sentences : {text.split(".").length - 1}
            <br />
            Time Taken To Read : {range} Minutes{" "}
          </p>
        </div>
        <div className="border rounded border-dark bg-black text-white container">
          <h4 className="text-center">Preview</h4>
          <textarea
            className="form-control border border-dark my-3 "
            style={myStyle}
            readOnly
            placeholder="Read here"
            value={text}
            onChange={changeText}
            id="textBox"
            col="3"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          className="btn btn-outline-secondary text-white mx-1 my-1"
          onClick={handleUpperCase}
        >
          Upper Case
        </button>
        <button
          className="btn btn-outline-secondary text-white mx-1 my-1"
          onClick={handleLowerCase}
        >
          Lower Case
        </button>
        <button
          className="btn btn-outline-secondary text-white mx-1 my-1"
          onClick={copy}
        >
          Copy
        </button>
        <button
          className="btn btn-outline-secondary text-white mx-1 my-1"
          onClick={capitalize}
        >
          Capitalize
        </button>
        <button
          className="btn btn-outline-secondary text-white mx-1 my-1"
          onClick={extraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-outline-secondary  text-white mx-1 my-1"
          onClick={textClear}
        >
          Clear
        </button>
      </div>
      <footer className="text-white" style={foot}>
        &copy;Copyright |{" "}
        <a style={foot} href="https://www.devdaim.tech">
          DevDaim
        </a>
      </footer>
    </>
  );
}
