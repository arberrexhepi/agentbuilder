import React from 'react';
import { Button } from \"@/headers/ui/button\";

function ShadcnButton( { onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}


export default ShadcnButton;
