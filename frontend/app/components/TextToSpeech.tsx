"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Speech } from "lucide-react";

const TextToSpeech = ({ page }: { page?: string }) => {
  const handleButtonClick = () => {
    const text = window.getSelection()?.toString();
    if (text) {
      const _speechSynth = window.speechSynthesis;
      const voices = _speechSynth.getVoices();
      console.log(voices);
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      const utterance = new SpeechSynthesisUtterance(page);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={handleButtonClick}>
        <Speech className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
};

export default TextToSpeech;
