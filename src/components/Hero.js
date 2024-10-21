import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="bg-image"></div>
      <div className="bg-text">
        <h1>Welcome to <img src="https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg" alt="MyWebsite Logo" className="hero-logo" aria-hidden="true" /></h1>
        <p>We bring your digital dreams to life.</p>
        {/* Button to open modal */}
        <button id="openModal">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
