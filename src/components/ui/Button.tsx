import React from 'react';
import theme from '../../data/config.json'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean
  onSave?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button ({ onClick, children, disabled = false, onSave } : ButtonProps){
  return (
    <button onClick={onSave || onClick}
      className='p-3 border rounded-2xl hover:scale-110 transition duration-300 ease-in-out active:scale-100'
      style={{
        borderColor: theme.secondary,
        fontFamily: theme.fontBody
      }}
      disabled={disabled}
    >{children}</button>
  );
};

