// Animation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Animation.css';

const Animation = () => {



  return (
    <>
      <div className="animation-container">
        <video className="fullscreen-video" autoPlay muted >
          <source src="animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Animation;
