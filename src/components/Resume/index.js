// src/components/Resume/index.js

import React from 'react';
import './index.scss'; // Optional: for custom styles

const Resume = () => {
  return (
    <div className="resume">
      <a href="/r.pdf" download>
        <button className="btn">Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
