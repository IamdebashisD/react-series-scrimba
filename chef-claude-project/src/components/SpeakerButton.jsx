import React from 'react'
import {useSpeechSynthesis} from 'react-speech-kit';
function SpeakerButton(props) {
    const {speak, speaking , cancel} =  useSpeechSynthesis();
    const handleSpeak = () => {
    if (speaking) {
      cancel();
    } else {
      speak({ 
        text: props.text,
        rate: 1.1,    // Slightly slower pace for recipes
        pitch: 1.0,
        volume: 1.0
      });
    }
  };

  return (
     <button
      onClick={handleSpeak}
      className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        speaking ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      aria-label={speaking ? "Stop reading" : "Read recipe aloud"}
      disabled={!props.text}
    >
      {speaking ? (
        // Stop icon
        <img src={props.pause} alt="play" width={20} />
      ) : (
        // Speaker icon
        <img src={props.volume} alt="pause" width={20}/>
      )}
    </button>
  )
}

export default SpeakerButton