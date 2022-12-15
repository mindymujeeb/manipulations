import React, { useState } from 'react'

import uppercase from "../assets/images/uppercase.png"
import lowercase from "../assets/images/lowercase.png"
import capitalise from "../assets/images/capitalise.png"
import clear from "../assets/images/clear.png"
import copy from "../assets/images/copy.png"
import remove from "../assets/images/remove.png"
// import light from "../assets/images/light.avif"
// import dark from "../assets/images/dark.jpg"

export default function FormComponent(props) {
    // onChange() method but not onClick() method ---> to collect the text from the text area
    const changeText = (e) => {
      setText(e.target.value);
    }
  
    // defining the initial state
    let [text, setText] = useState("");
    // let [bg,setbg] = useState({
    //   color:"black",
    //   backgroundColor:"white",
    //   newText:"Dark-Mode"
    // });

  // // Toggle the mode - light or Dark --->
  // const darkMode = () => {
  //   if(bg.color === "black"){
  //     const changedColor = {
  //       color:"white",
  //       backgroundColor:"#0E0E0E",
  //       newText:"Light-Mode",
  //       textAreaColor :"white",
  //       textAreaBackgroundColor :"#0E0E0E"
  //     };
  //     const textArea = document.querySelector("#myForm");
  //     document.body.style.backgroundColor = changedColor.backgroundColor;
  //     document.body.style.color = changedColor.color;
  //     textArea.style.backgroundColor = changedColor.textAreaBackgroundColor;
  //     textArea.style.color = changedColor.textAreaColor;
  //     setbg(changedColor);
  //   }
  //   else{
  //     const changedColor = {
  //       color:"black",
  //       backgroundColor:"#cbcaca5f",
  //       newText:"Dark-Mode",
  //       textAreaColor :"black",
  //       textAreaBackgroundColor :"white"
  //     };
  //     const textArea = document.querySelector("#myForm");
  //     document.body.style.backgroundColor = changedColor.backgroundColor;
  //     document.body.style.color = changedColor.color;
  //     textArea.style.backgroundColor = changedColor.textAreaBackgroundColor;
  //     textArea.style.color = changedColor.textAreaColor;
  //     setbg(changedColor);
  //   }
  // }
  // <img className='icons-light' onClick={darkMode} alt='icon' src={light} />
  // <img className='icons-dark' onClick={darkMode} alt='icon' src={dark} />

  // upperCase() --->
  const textToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }

  // lowerCase() --->
  const textToLowercase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }
  
  // remove spaces() --->
  const removeSpaces = () => {
    const spaces = text.replace(/\s+/g," ");
    setText(spaces);
  }

  // capitalizeCase() --->
  const capitalizeCase = () => {
    let changedText = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    setText(changedText);
  }
  
  // clear the text area
  const clearText = () => {
    text = "";
    setText(text);
  }

  // copy the text in the  area
  const copyText = () => {
    navigator.clipboard.writeText(text).then(function() {
      alert('Copying to clipboard was successful!');
    }, function(err) {
      alert('Could not copy text: ', err);
    });
  }

  return (
    <div>
      <div className='navbar'>
        <p className='heading-text-manipulations'>Type the text in the Text-Box below</p>
      </div>
      <p className='line-break'></p>
      <div className='container'>
        <div className='container-1'>
          <textarea className="text-area" onChange={changeText} value={text} id="myForm"></textarea>
          <p className='description'>It consists of <span className='words'>{text.length}</span> letters and <span className='words'>{text.match(/(\w+)/g)?text.match(/(\w+)/g).length:0}</span> words</p>
        </div>
        
        <div className='container-2'>
          <p className='heading'>Preview</p>
          <p className='preview-text'>{
            text.length <= 500 ? text.slice(0, 500) : text.slice(0,500)
          }...</p>
        </div>
      </div>
      <div className='container-3'>
        <div className='button-icon' onClick={textToUppercase}>
          <img className='icons' alt='icon' src={uppercase} />
          <button className='button' type='submit'>uppercase</button>
        </div>
        <div className='button-icon' onClick={textToLowercase}>
          <img className='icons' alt='icon' src={lowercase} />
          <button className='button' type='submit'>lowercase</button>
        </div>
        <div className='button-icon' onClick={capitalizeCase}>
          <img className='icons' alt='icon' src={capitalise} />
          <button className='button' type='submit'>capitalise</button>
        </div>
        <div className='button-icon' onClick={removeSpaces}>
          <img className='icons' alt='icon' src={remove} />
          <button className='button' type='submit'>Remove Extra Spaces</button>
        </div>
        <div className='button-icon' onClick={copyText}>
        <img className='icons' alt='icon' src={copy} />
        <button className='button' type='submit'>Copy</button>
        </div>
        <div className='button-icon' onClick={clearText}>
          <img className='icons' alt='icon' src={clear} />
          <button className='button' type='submit'>Clear</button>
        </div>
      </div>
    </div>
    )
  }
