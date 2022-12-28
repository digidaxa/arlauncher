/* eslint-disable no-unused-vars */
import '@google/model-viewer';
import React from 'react';
import { 
  FaCamera,
   
} from 'react-icons/fa';

export default function Model({ data }) {
  const { primary } = data.colorPalette;

  return (
    <model-viewer
      id="model"
      src={data.model.src}
      ios-src=""
      alt={data.model.alt}
      shadow-intensity="1"
      camera-controls
      ar
      modes="webxr scene-viewer quick-look"
      camera-orbit="17.95deg 85.97deg 16.01m"
      auto-rotate
      autoplay
      style={{
        backgroundColor:primary,
      }}
    >
      <button 
        slot="ar-button"
        className="absolute flex gap-2 items-center bottom-4 right-4 py-1 px-3 border-[1px] border-secondary rounded-full bg-secondary shadow shadow-secondary hover:shadow-lg hover:shadow-secondary text-white transition-all duration-150"
      >
        <span>Enable AR</span>
        <FaCamera />
      </button>
    </model-viewer>
  )
}
