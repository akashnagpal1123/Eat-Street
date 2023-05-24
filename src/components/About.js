import React from 'react';
import Header from './Header';

function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is about the food delivery app</p>


      <div className="button" >
        <div className="button-wrapper">
          <div className="text">Search</div>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>



  )
}

export default About;