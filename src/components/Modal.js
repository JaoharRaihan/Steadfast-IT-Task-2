import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // If modal isn't open, return nothing

  return (
    <div id="myModal" className="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div className="modal-content">
        <span className="close" aria-label="Close modal" onClick={closeModal}>&times;</span>
        <h2 id="modal-title">Modal Title</h2>
        <p id="modal-description">This is a modal window providing additional information!</p>
      </div>
    </div>
  );
};

export default Modal;
// In the Modal component, we're using the isOpen prop to conditionally render the modal. If the modal isn't open, we return null, which means nothing will be rendered.