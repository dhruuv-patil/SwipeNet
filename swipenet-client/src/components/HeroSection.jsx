import React from 'react';
import Card from './card/Card'

const HeroSection = () => {
  return (
    <>
    <div class="hero">
                <div class="hero-content">
                <div class="tagline-box"><h4 class="tagline">Revolutionizing Hiring</h4></div>
                <h1 class="slogan">Find Your Perfect Match in the <span class="highlight-content">Job Market</span></h1>
                <h4 class="about">SwipeNet brings the simplicity of swipe-based interfaces to hiring. Match with the right jobs or candidates instantly and transform your career path.  </h4>
                   <div class="buttons">
                    <button class="primary-btn"><i class="fa-solid fa-user"></i>      I'm a Job Seeker</button>
                    <button class="sec-btn"><i class="fa-solid fa-briefcase"></i>    I'm an Employer </button>
                   </div>
            
                </div>

                <div class="card">
                    <Card/>
                </div>
                

            </div>
    </>
   
  );
};

export default HeroSection;