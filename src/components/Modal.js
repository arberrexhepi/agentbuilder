import React from 'react';
import '@shadcn/modal.css';

function Modal({isDisplayed, hide, children, onSubmit}) {
  return (
    <div className={ isDisplayed ? 'modal block' : 'Modal Is Not Displayed'}>\n    <div className='modal-backdrop'></div>\n    <div className='modal-content'>\n      {children}\n    </div>\n    <button onClick={hide}>Close </button>\n    <div>\n      <button onClick={onSubmit}>Submit</utton>\n    </div>\n  </div>\n);}\nexport default Modal;