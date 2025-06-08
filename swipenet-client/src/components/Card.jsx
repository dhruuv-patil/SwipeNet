import React from 'react';


const Card = () => {
  return (
    <div class="card">
      <header class="card-header">
        <h1 class="card-header-title">SwipeNet</h1>
        <h2 class="card-header-subtitle">Revolutionizing Hiring</h2>
        <h3 class="card-header-tagline">Find Your Perfect Match in the Job Market</h3>
        <p class="card-header-description">
          SwipeNet brings the simplicity of swipe-based interfaces to hiring. 
          Match with frequent bosses or adamant-dates instantly and transform your career path.
        </p>
      </header>

      <div class="card-tabs">
        <button class="card-tab active">I'm a Job Seeker</button>
        <button class="card-tab">I'm an Employer</button>
      </div>

      <div class="card-divider"></div>

      <div class="card-content">
        <h3 class="card-job-title">Senior Frontend Developer</h3>
        <p class="card-company">New TechVision Inc.</p>
        
        <div class="card-rating">
          
        </div>
        
        <p class="card-review">"Great company culture with competitive pay and excellent benefits package"</p>
        
        <div class="card-details">
          <div class="card-detail">
            <span>San Francisco, CA (Remote)</span>
          </div>
          <div class="card-detail">
            <span>120–150k</span>
          </div>
          <div class="card-detail">
            <span>Team of 12</span>
          </div>
          <div class="card-detail">
            <span>Benefits</span>
          </div>
        </div>
      </div>

      <div class="card-actions">
        <button class="card-skip">Skip</button>
        <button class="card-match">Match</button>
      </div>
    </div>
  );
};

export default Card;