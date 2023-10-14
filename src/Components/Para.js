import React from 'react';
import { useState, useEffect, generate } from 'react';

function Para(){
     
    const paragraph="substance dot grew surrounded best color basic combine balloon wish began soft lady few consonant driving threw diameter strong practical prove whenever me recognize quick gradually guard stock joined stretch movement bat act whatever twice season influence hurried honor growth stems skill place progress until public quiet wagon buy refer";

    let Text=paragraph.split("");
    
    console.log(Text);

//     const handleInput=()=>{

//     const [wordsArray, setWordsArray] = useState(() => {
//         return generate(50);
//     })

//     const [correctChars, setCorrectChars] = useState(0);
//     const [incorrectChars, setIncorrectChars] = useState(0);
//     const [missedChars, setMissedChars] = useState(0);
//     const [extraChars, setExtraChars] = useState(0);
//     const [correctWords, setCorrectWords] = useState(0);

//     const handleWords = (count) => {
//         setWordsArray((() => {
//             return generate(count);
//         }))
//     }

//     const currentWordRef = wordsSpanRef[currentWordIndex].current;
//     const allCurrentChars = wordsSpanRef[currentWordIndex].current.childNodes;

//     useEffect(() => {
//         focusInput()
//         wordsSpanRef[0].current.childNodes[0].className = 'current'; cl
//     }, [])
// } 
    return(
        <div>
            <div id="typing-test">
                <p>{paragraph}</p>
                <input type="text" onKeyDown="handleInput()" hidden/>
            </div>
        </div>
    );
}

export default Para;