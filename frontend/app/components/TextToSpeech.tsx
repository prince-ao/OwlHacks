"use client";

import React from 'react';

const TextToSpeech = () => {
  const handleButtonClick = () => {
    const text = window.getSelection().toString();
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Speak Highlighted Text</button>
    </div>
  );
};

export default TextToSpeech;