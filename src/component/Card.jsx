import React from 'react';

const Card = ({ img, subject, currentTime, prevText, prevTime, tag }) => {
  return (
    <div className="data">
      <div className={`img-container ${tag}`} >
        <img src={img} alt={`${subject} icon`}  />
      </div>
      <div className="info-event">
        <div className="category-event">
          <p className="category-name">{subject}</p>
          <p className="dots">...</p>
        </div>
        <div className="selected-time">
          <p className="hours">{currentTime}</p>
          <p className="prev-time">{prevText} - {prevTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
