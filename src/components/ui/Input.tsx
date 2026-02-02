import React, { useState } from 'react';
import theme from '../../data/config.json'

interface InputProps {
  onChange: (value: string) => void;
  type?: string;
  value?: string;
  label?: string;
}

export default function Input({ onChange, type = 'text', value = '', label } : InputProps){
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col gap-2 justify-center'>
      <label
      className='text-2xl font-bold'
      style={{
        color: theme.text,
        fontFamily: theme.fontTitle
      }}
      >{label}</label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        className='w-full p-4 rounded-2xl'
        style={{
            backgroundColor: theme.secondary,
            color: theme.textHover,
            fontFamily: theme.fontBody
        }}
      />
    </div>
  );
};

