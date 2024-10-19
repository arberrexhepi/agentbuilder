import React from 'react';
import '@shadcn/modal.css';

function Modal({ isDisplayed, hide, children, onSubmit }) {
  return (
    <div className={ isDisplayed ? 'modal block' : 'none'}>
      <div className='modal-backdrop'></div>
      <div className='modal-content'>
      {children}
      </div>
      <button onSubmit={onSubmit}>Submit</button>
    </div>
    <button onClick={hide}>Close</button>
  </div>
  );}

export default Modal;