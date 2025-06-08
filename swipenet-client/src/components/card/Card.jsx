import React from 'react';
import './Card.css'; 
const Card = () => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">Senior Frontend Developer</h3>
        <p className="company-name">New TechVision Inc.</p>
        
        <div className="rating">
          
        </div>
        
        <p className="review">"Great company culture with competitive pay and excellent benefits package"</p>
      </div>

      <div className="job-details">
        <div className="detail-item">
          <span>Hinjewadi Phase-1, Pune (Remote)</span>
        </div>
        <div className="detail-item">
          <span>Rs.20000-30000</span>
        </div>
        <div className="detail-item">
          <span>Team of 12</span>
        </div>
        <div className="detail-item">
          <span>Benefits</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="skip-btn">Skip</button>
        <button className="match-btn">Match</button>
      </div>
    </div>
  );
};

export default Card;