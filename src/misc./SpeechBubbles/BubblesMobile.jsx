import React, { useState } from 'react';
import { dialogues } from '../../dialoguesData.js';

import styled from 'styled-components';

const Wrapper = styled.section`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`
const Bubble = styled.div`
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

function BubblesMobile() {
    const [dialogueId, setDialogueId] = useState(0); 
    const [indexLeft, setIndexLeft] = useState(0); 
    const [leftText, setLeftText] = useState(''); 
    const [indexRight, setIndexRight] = useState(1); 
    const [rightText, setRightText] = useState(''); 

    const showDialogue = function(dialogueId) {
         // get the right dialogue from data
         const dialogue = dialogues.filter((e) => e.id === dialogueId);
         /// filter method returns an array
         // acces texts inside dialogue
         const texts = dialogue[0].texts;
        // get the right texts
         setLeftText(texts[indexLeft]);
         setRightText(texts[indexRight]);
        // increment index values
         setIndexLeft(indexLeft + 2);
         setIndexRight(indexRight + 2);
    }

    return ( 
        <Wrapper>
            <Bubble className='left'>{leftText}</Bubble>
            <Bubble className='right'>{rightText}</Bubble>
            <button onClick={() => showDialogue(1)}>Tap to continue</button>
        </Wrapper>
        
     );
}

export default BubblesMobile;