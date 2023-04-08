import React, { useState } from "react";
import "./Form.css"
import ToggleButton from '@mui/material/ToggleButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import Divider from "@mui/material/Divider";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ColorSelector from 'react-color-selector';

export default function Form(props) {
  //USeState Hooks
  const [text, setInput] = useState("");
  const [uText, setText] = useState("");
  // const [listen, setListen] = useState(null);
  const [bold, setBold] = useState("normal");
  const [italic, setItalic] = useState("normal");
  const [underline, setUnderline] = useState("");
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => [""]);
  const [myColor, pickedColor] = useState('');
  const [colorPicker, setColorPicker] = useState('none');

  const picker_data = {
    col: 50,
    row: 50,
    width: 300,
    height: 250,
    view: 'both',
    theme: 'dark',
    title: 'COLORS',
    cellControl: 4
  }


  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleToggle = () => {
    if (colorPicker === "none")
      setColorPicker("")
    else
      setColorPicker("none")
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  //for toggle buttons 
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));


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

  function handleLeftAlign() {
    setFormats(["left"])

  }
  function handleCenterAlign() {
    setFormats(["center"])

  }
  function handleRightAlign() {
    setFormats(["right"])

  }
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

  //fucntion to Punctuate text
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
  //fucntion to bold the text
  function handleBold() {
    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Make it Bold 🙄");
    } else {
      if (bold === "normal") {
        setBold("bold")
        props.showAlert("success", "! Text Bold");
      } else {
        setBold("normal")
      }
    }
  };
  //fucntion to Italicise the text
  function handleItalic() {

    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Italicise 🙄");
    } else {
      if (italic === "normal") {
        setItalic("italic")
        props.showAlert("success", "! Text Italicised");
      } else {
        setItalic("normal")
      }
    }
  };
  function handleUnderline() {

    if (text === "") {
      props.showAlert("warning", "! Please Enter Text To Undeline 🙄");
    } else {
      if (underline === "") {
        setUnderline("underline")
        props.showAlert("success", "! Text Underlined");
      } else {
        setUnderline("")
      }
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
            className={`input form-control bg-${props.bg} border border-${props.textMode}border-${props.textMode} my-3`}
            readOnly
            placeholder="Read here"
            value={text}
            onChange={changeText}
            id="textBox"
            col="1"
            rows="8"
            style={{ fontWeight: `${bold}`, fontStyle: `${italic}`, textDecoration: `${underline}`, textAlign: `${formats}`, color: `${myColor}` }}
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
          className={`button btn  text-${props.textMode}   btn-outline-secondary mx-1 my-1`}
          onClick={handleLowerCase}
        ><small>
            Lower Case
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
      <div className="container" >


        <div className="row  ">
          <div className="d-flex">
            <StyledToggleButtonGroup
              size="small"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon onClick={handleLeftAlign} />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon onClick={handleCenterAlign} />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon onClick={handleRightAlign} />
              </ToggleButton>
            </StyledToggleButtonGroup>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <StyledToggleButtonGroup
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
            >
              <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon onClick={handleBold} />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon onClick={handleItalic} />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon onClick={handleUnderline} />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </div>
          <div className="d-flex justify-content-center">
            <ToggleButton value="color" aria-label="color" style={{ width: "4rem" }} onClick={handleToggle}>
              <FormatColorFillIcon style={{ color: `${myColor}` }} />
              <ArrowDropDownIcon />
              <ToggleButton style={{ display: `${colorPicker}` }} >
                <ColorSelector pallet={picker_data} selectedColor={pickedColor} />
              </ToggleButton>
            </ToggleButton>
          </div>
        </div>



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
