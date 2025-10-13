'use client'

import { Button, TextField } from '@mui/material';
import { useEffect, useState, ChangeEvent } from 'react';

export default function Home() {

  const [colorInput, setColorInput] = useState('');

  function handleTranslationRequest() {
    console.log("handleTranslationRequest");
  }

  function handleColorInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const isValidInput = checkInput(value)

    if (!isValidInput) {
      return;
    }

    setColorInput(value);
  }

  function checkInput(value: String): boolean {
    
    return true;
  }

  return (
    <div className="container">
      <TextField
        id="input-color"
        label="Color"
        variant="outlined"
        onChange={handleColorInputChange}
      />
      <Button
        variant="outlined"
        onClick={handleTranslationRequest}
      >OK</Button>
      <div></div>
    </div>
  );
}
