/* eslint-disable no-unused-vars */
import '@google/model-viewer';
import React, { useEffect, useState } from 'react';
import { 
  FaCamera,
  FaVolumeMute,
  FaVolumeUp,
   
} from 'react-icons/fa';

export default function Model() {
  const [model, setModel ] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    setModel(document.querySelector('#model'));
    setAudio(document.querySelector('#audio'));
  }, []);

  const linkHandler = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  }

  // const PlayAudio = () => {
  //   audio.play();
  // }

  const MuteAudio = () => {
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  }

  return (
    <model-viewer
      id="model"
      // onClick={() => PlayAudio()}
      src="./models/kura12.glb"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      ar
      modes="webxr scene-viewer quick-look"
      camera-orbit="17.95deg 85.97deg 16.01m"
      auto-rotate
      autoplay
    >
      <button 
        onClick={() => MuteAudio()}
        className="absolute flex gap-2 items-center bottom-4 left-4 p-2 border-[1px] border-white rounded-full bg-white shadow shadow-secondary hover:shadow-lg hover:shadow-secondary text-primary transition-all duration-150"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <button 
        slot="ar-button"
        // onClick={() => PlayAudio()}
        className="absolute flex gap-2 items-center bottom-4 right-4 py-1 px-3 border-[1px] border-secondary rounded-full bg-secondary shadow shadow-secondary hover:shadow-lg hover:shadow-secondary text-white transition-all duration-150"
      >
        <span>Enable AR</span>
        <FaCamera />
      </button>
      {/* <audio 
        id="audio"
      >
        <source src="./audio/Hudson-balanced.mp3" type="audio/mpeg"></source>
      </audio> */}
    </model-viewer>
  )
}
