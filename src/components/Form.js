import React, { useState } from "react";
import "./Form.css"
export default function Form(props) {
  //USeState Hooks
  const [text, setInput] = useState("");
  const [uText, setText] = useState("");
  // const [listen, setListen] = useState(null);

  //Variables
  let count = (uText.split(" ").length - 1); // + (uText.split(".").length - 1)
  const range = (uText.split(" ").length / 110) - 0.0055555555555555556;

  //Css
  const foot = {

    margin: "68vw 0 5vw 0",
    textDecoration: "none",
    color: "#5af3df",
  };

  const foot1 = {

    margin: "68vw 0 5vw 0",

  };

  const changeText = (event) => {

    setText(event.target.value);
    setInput(event.target.value);

  };

  //fucntion to convert text to UpperCase
  const handleUpperCase = (event) => {
    // console.log("clicked");
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      const NewText = uText.toUpperCase();
      setInput(NewText);
      props.showAlert("success", "! Converted to UpperCase 🤗");
    }
  };

  //fucntion to convert text to LowerCase
  function handleLowerCase() {
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      const NewText = uText.toLowerCase();
      setInput(NewText);
      props.showAlert("success", "! Converted to LowerCase 🤗");
    }
  }

  //function to correct spell
  async function handleSpell() {
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Check 🙄");
      return;
    }
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '632a1d3569mshf3161e9d8d7f486p1c0d34jsne6615e4c4573',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      body: `{"model":"text-davinci-edit-001","input":"${uText}","instruction":"Fix the spelling mistakes"}`
    };

    const res = await fetch('https://openai80.p.rapidapi.com/edits', options);
    const resJson = await res.json();
    setInput(resJson.choices[0].text)
    props.showAlert("success", "! Spelling Corrected 🤗");

  }

  //fucntion to download speech of text
  const text2Speech = async () => {
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Hear it 🙄");
    } else {
      const res = await fetch(`https://text2speech3.p.rapidapi.com/tts?text=${uText}&rapidapi-key=632a1d3569mshf3161e9d8d7f486p1c0d34jsne6615e4c4573`) /*&slow=${slow}&lang=${lang}*/
      console.log(res.url)
      // setListen(res.url);
      props.showAlert("success", "! Downloaded Successfully 🤗");
    }
  };
  //fucntion to copy text to clipboard
  const copy = () => {
    if (uText === "") {
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
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Capitalize it 🙄");
    } else {
      const arr = uText.split(" ");

      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str = arr.join(" ");
      setInput(str);
      props.showAlert("success", "! Capitalized successfully 🤗");
    }
  }

  //fucntion to Capitalize text
  async function punctuation() {
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Capitalize it 🙄");
    } else {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '632a1d3569mshf3161e9d8d7f486p1c0d34jsne6615e4c4573',
          'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body: `{"model":"text-davinci-edit-001","input":"${uText}","instruction":"Correct the punctuation mistakes"}`
      };

      const res = await fetch('https://openai80.p.rapidapi.com/edits', options);
      const resJson = await res.json();
      setInput(resJson.choices[0].text)
      props.showAlert("success", "! Punctuation Mistakes Fixed 🤗");
    }
  }

  //fucntion to remove Extra Spaces
  const extraSpaces = () => {
    if (uText === "") {
      props.showAlert("warning", "! Please Enter Text To Manipulate 🙄");
    } else {
      let newText = uText.split(/[ ]+/);
      setInput(newText.join(" "));
      props.showAlert("success", "! Extra Spaces Has been removed 🤗");
    }
    if (uText.split(/[ ]+/).length === 2) {
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

  return (
    <>


      <div className={`container mb-1`}>
        <textarea
          className={`form-control bg-${props.bg} border border-${props.textMode} text-${props.textMode} border-${props.textMode}  my-3`}
          placeholder="Enter your text here"
          value={uText}
          onChange={changeText}
          id="textBox2"
          autoFocus
          col="1"
          rows="7"
        >
        </textarea>
        <div className="container my-4">
          <h4 className={`text-center  border-${props.textMode} text-${props.textMode}`}>Summary </h4>
          <hr className={`border rounded border-${props.textMode}`} />

          <p className={`text-${props.textMode}`}>
            Words : {count} <br />
            Characters : {uText.length} <br />
            Sentences : {uText.split(".").length - 1}
            {/* Vowels : {vowelsRef} */}
            <br />
            Time Taken To Read : {range.toFixed(2)} Minutes{" "}
          </p>
        </div>
        <hr className={`border rounded border-${props.textMode}`} />
        <div className={`   container`}>
          <h4 className={`text-center text-${props.textMode} `}>Preview  </h4>
          <textarea
            className={`input form-control bg-${props.bg} border border-${props.textMode} text-${props.textMode} border-${props.textMode} my-3`}
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
          className={`button btn  text-${props.textMode} btn-outline-secondary mx-1 my-1`}
          onClick={handleUpperCase}
        >
          <small>
            Upper Case
          </small>
        </button>
        <button
          className={`button btn  text-${props.textMode} btn-outline-secondary mx-1 my-1`}
          onClick={handleSpell}
        >
          <small>
            SpellChecker
          </small>
        </button>
        <button
          className={`button btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={handleLowerCase}
        ><small>
            Lower Case
          </small>
        </button>
        <button
          className={`button btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={punctuation}
        ><small>
            Punctuation
          </small>
        </button>
        <button
          className={`button btn text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={copy}
        ><small>
            Copy
          </small>
        </button>
        <button
          className={`button btn text-${props.textMode}   btn-outline-secondary mx-1 my-1`} disabled
          onClick={text2Speech}
        ><small>
            Download Speech
          </small>
        </button>
        <button
          className={`button btn text-${props.textMode}  btn-outline-secondary mx-1 my-1`}
          onClick={capitalize}
        >
          <small className="t">
            Capitalize
          </small>
        </button>
        <button
          className={`button btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={extraSpaces}
        >
          <small>
            Remove Extra Spaces
          </small>
        </button>
        <button
          className={`button btn text-${props.textMode} btn-outline-secondary  mx-1 my-1`}
          onClick={textClear}
        ><small>
            Clear
          </small>
        </button>
        {/* <iframe src={`${listen}`} style={{ visibility: "hidden" }}></iframe> */}
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
