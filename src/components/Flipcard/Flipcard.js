import React, { useState } from 'react';

export default function Flipcard({ flipcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="flip-wrapper" onMouseOver={() => setFlip(!flip)}>
      <h2>{flipcard.title}</h2>
      {flip ? (
        <div className="ProjectsList-project-image-faded">
          <h3>Tech Stack:</h3>
          <p> {flipcard.technologies}</p>

          {/* <img src={flipcard.image} alt="screenshot" /> */}
        </div>
      ) : (
        <div className="ProjectsList-project-image">
          <img src={flipcard.image} alt="screenshot" />
        </div>
      )}
    </div>
  );
}
