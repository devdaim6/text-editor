import React, { useState, useEffect } from "react";
import "./App.css"
export default function Form(props) {
  const [text, setInput] = useState("");
  const [uText, setText] = useState("");
   
  useEffect(() => {
    setText(uText);
    
    return () => {
      // console.log(uText)
    };
  }, [uText]);
  
 
  let count = text.split(" ").length - 1;
  const range = text.split(" ").length/180;




  const foot = {

    margin: "68vw 0 5vw 0",
    textDecoration: "none",
    color: "#5af3df",
  };
 
 
    
   
 

  const foot1 = {

    margin: "68vw 0 5vw 0",

  };
 const changeText = (event) => {
    // console.log("yes")
    setText(event.target.value);
    setInput(uText);
  // countVowels(...vowelsRef);

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
  }

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
      props.showAlert("success", "! Capitalized successfully 🤗");
    }
  }

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

/*   function countVowels(...vowelsRef){
      for(let i=0;i<uText.length;i++){
           if(uText.charCodeAt(i)===97 || uText.charAt(i)===101 || uText.charCodeAt(i)===105 || uText.charCodeAt(i)===111 || uText.charCodeAt(i)===117 || uText.charCodeAt(i)===65 || uText.charCodeAt(i)===69 || uText.charCodeAt(i)===73 || uText.charCodeAt(i)===79 || uText.charCodeAt(i)===85)
            {
               vowelsRef++;
                console.log(vowelsRef)
            } 
       }
  }  */

  return (
    <>

      <div className={`container   mb-3`}>
        <textarea
          className={`form-control bg-${props.bg} border border-${props.textMode} text-${props.textMode} border-${props.textMode}  my-3`}
          
          placeholder="Enter your text here"
          value={uText}
          onChange={changeText}
          id="textBox2"
          col="1"
          rows="7"
        ></textarea>

        <div className="container my-4">
          <h4 className={`text-center  border-${props.textMode} text-${props.textMode}`}>Summary<hr /></h4>

          <p className={`text-${props.textMode}`}>
            Words : {count} <br />
            Characters : {text.length} <br />
            Sentences : {text.split(".").length - 1}
            {/* Vowels : {vowelsRef} */}
            <br />
            Time Taken To Read : {range} Minutes{" "}
          </p>
        </div>
        <hr />
        <div className={`   container`}>
          <h4 className={`text-center text-${props.textMode} `}>Preview  </h4>
          <textarea
            className={`form-control bg-${props.bg} border border-${props.textMode} text-${props.textMode} border-${props.textMode} my-3`}

            readOnly
            placeholder="Read here"
            value={text}
            onChange={changeText}
            id="textBox"
            col="1"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          className={`btn  text-${props.textMode} btn-outline-secondary mx-1 my-1`}
          onClick={handleUpperCase}
        >
          Upper Case
        </button>
        <button
          className={`btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={handleLowerCase}
        >
          Lower Case
        </button>
        <button
          className={`btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={copy}
        >
          Copy
        </button>
        <button
          className={`btn  text-${props.textMode}  btn-outline-secondary mx-1 my-1`}
          onClick={capitalize}
        >
          Capitalize
        </button>
        <button
          className={`btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={extraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn text-${props.textMode} btn-outline-secondary  mx-1 my-1`}
          onClick={textClear}
        >
          Clear
        </button>
      </div>
      <footer className={`text-${props.textMode} text-center`} style={foot1} >
        &copy;Copyright |{" "}
        <a style={foot} href="https://www.devdaim.tech">
          DevDaim
        </a>
      </footer>

    </>
  );
}
