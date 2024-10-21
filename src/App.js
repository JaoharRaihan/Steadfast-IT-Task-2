import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <CardsSection />
      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      {/* Button to open modal */}
      <button onClick={() => setModalOpen(true)}>Learn More</button>
    </div>
  );
};

export default App;
