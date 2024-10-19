import React from 'react';
import '../styles/global.css'; // Import global styles

import ShadcnButton from './ShadcnButton';

const Modal = (props) => {
  return (
    <div className="modal bg-black gray-bg" style={{display: props.open ? 'block' : 'none'}}>
      <div className="modal-content mx-auto text-center py-10">
        <p>{props.children}</p>
        <ShadcnButton onSubmit={props.onClose}>Close</ShadcnButton>
      </div>
    </div>
  );
};

export default Modal;