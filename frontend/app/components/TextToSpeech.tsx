import React from "react";
import { Button } from "@/components/ui/button";
import { Speech } from "lucide-react";

const TextToSpeech = ({ page }: { page?: string }) => {
    const handleButtonClick = () => {
        const text = window.getSelection()?.toString() || page;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8; // Set the speech rate to a slower value
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = window.speechSynthesis.getVoices();
            utterance.voice = voices[0]; // Set the voice for the utterance
            window.speechSynthesis.speak(utterance);
        };
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
