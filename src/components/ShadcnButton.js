import React from 'react';
import '@shadcn/button.css';

function ShadcnButton(props) {
  return (
    <button className='snb-button snb-button-ld snb-button-primary'
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ShadcnButton;