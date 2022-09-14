import React, { useState } from 'react';
import { dialogues } from '../../dialoguesData.js';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
    width: 40%;
`
const Bubble = styled.div`
    display: inline-block;
    position: relative;
    margin: 0 auto;
    max-width: 300px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 3px solid black;
    background: white;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: 'Permanent Marker', cursive;
    clear: both;
    &:before {
     content: '';
     position: absolute;
     bottom: -50px;
     height: 50px;
     width: 90px;
    }
    // Left Bubble
    &.left {
        float: left;
        margin: 10px 100px 60px 10px;
        &:before {
            border-radius: 0 0 100%;     
            box-shadow: 
            -2px -2px 0 0 #000 inset,
            -23px 0 0 0 #fff inset,
            -25px -2px 0 0 #000 inset;
            left: 0;
        }
    }
    // Right Bubble
    &.right {
        float: right;
        margin: 10px 10px 60px 100px;
        &:before {
            border-radius: 0 0 0 100%;     
            box-shadow: 
            2px -2px 0 0 #000 inset,
            23px 0 0 0 #fff inset,
            25px -2px 0 0 #000 inset;
            right: 0;
        }   
    }
`

const ArrowBtn = styled.button`
    width: 20px;
    height: 24px;
    background: transparent;
    border: 0;
    position: absolute;
    bottom: -30px;
    cursor: pointer;
    &.left {
        right: 0;
    }
    &.right {
        left: 0
    }
`

function SpeechBubble() {
    const [dialogueId, setDialogueId] = useState(0); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [textArray, setTextArray] = useState([]); 

    const showDialogue = function(dialogueId) {
        // get the right dialogue from data
        const dialogue = dialogues.filter((e) => e.id === dialogueId);
        /// filter method returns an array
        // acces texts inside dialogue
        const texts = dialogue[0].texts;
        // push text in currentIndex from texts to textArray
        setTextArray([...textArray, texts[currentIndex]]);
        // increment currentIndex value
        setCurrentIndex(currentIndex + 1);
        // after 4 bubbles, clear out and go back to top
        if (textArray.length === 4) {
            setTextArray([texts[currentIndex]]);  
        };
    }

    return (
        <>
            <div>
                <button onClick={() => showDialogue(1)}>Start</button>
            </div>
            <Wrapper>
                {
                    textArray.map((e, i) => {
                        if (i % 2 === 0) {
                            return <Bubble className='left' key={i}>{e} <ArrowBtn onClick={() => showDialogue(1)} className='left'><FontAwesomeIcon icon={faArrowDownLong} /></ArrowBtn></Bubble>
                        }
                        return <Bubble className='right' key={i}>{e} <ArrowBtn onClick={() => showDialogue(1)} className='right'><FontAwesomeIcon icon={faArrowDownLong} /></ArrowBtn></Bubble>
                    })
                }
            </Wrapper> 
        </>
    );
}

export default SpeechBubble;