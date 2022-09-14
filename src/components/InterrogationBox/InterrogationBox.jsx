import React, { useState } from 'react';
import { dialogues } from '../../dialoguesData.js';
import './InterrogationBox.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

// Speech Bubble
const Bubble = styled.div`
    
    /* position: relative; */
    display: inline-block;
    position: absolute;
    margin: 0 auto;
    max-width: 280px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 3px solid black;
    background: white;
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: 'Covered By Your Grace', cursive;
    font-weight: bold;
    clear: both;
    z-index: 1;
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
        top: 5%;
        left: 40%; 
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
        bottom: 15%;
        right: 40%;
        &:before {
            border-radius: 0 0 0 100%;     
            box-shadow: 
            2px -2px 0 0 #000 inset,
            23px 0 0 0 #fff inset,
            25px -2px 0 0 #000 inset;
            right: 0;
        }   
    }

        @media (min-width: 568px) {
            position: relative;

            &.left {
                margin: 10px 10px 60px 10px;
                top: auto;
                left: auto; 
            }

            &.right {
                margin: 10px 10px 60px 10px;
                bottom: auto;
                right: auto;
        } 

    }
`
// Bubble Arrow Button - Desktop 
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

function InterrogationBox() {
    const [dialogueId, setDialogueId] = useState(0); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [textArray, setTextArray] = useState([]); 
    const [isInterrogating, setIsInterrogating] = useState(false);

    const showMobileDialogue = function(dialogueId) {
        // change button text
        setIsInterrogating(true);
        // get the right dialogue from data
        const dialogue = dialogues.filter((e) => e.id === dialogueId);
        /// filter method returns an array
        // acces texts inside dialogue
        const texts = dialogue[0].texts;
        // push text in currentIndex from texts to textArray
        setTextArray([...textArray, texts[currentIndex]]);
        // increment currentIndex value
        setCurrentIndex(currentIndex + 1);

         // on mobile, only show 2 bubbles
         // on desktop, show 4 bubbles
        if (window.innerWidth < 568 && textArray.length === 2) {
            setTextArray([texts[currentIndex]]); 
        } else if (window.innerWidth > 567 && textArray.length === 4) {
            setTextArray([texts[currentIndex]]); 
        }
       
        // reset button when dialogue ends
        if(currentIndex > texts.length - 1) {
            setTextArray([]);
            setCurrentIndex(0);
            setIsInterrogating(false);
        }
    }
    
    return (
        <main>
            <div class="top-bar">
                <div class="top-bar-content">INTERROGATION</div>
            </div>
            <section className='main-frames-conta'>
                <button onClick={() => showMobileDialogue(2)} className='start-btn'>
                    {isInterrogating ? 'Tap to Continue' : 'Start'}
                </button>
                <div className='frames-conta'>
                    <div className='leftFrame'></div>
                    <div className='rightFrame'></div>
                    <div className='bubbles-conta'>
                        {
                            textArray.map((e, i) => {
                                if (i % 2 === 0) {
                                    return <Bubble className='left' key={i}>{e}</Bubble>
                                }
                                return <Bubble className='right' key={i}>{e}</Bubble>
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}
export default InterrogationBox;