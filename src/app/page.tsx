'use client'

import { Button, TextField } from '@mui/material';
import { useEffect, useState, ChangeEvent } from 'react';

export default function Home() {

  const [colorInput, setColorInput] = useState('');

  async function handleTranslationRequest() {
    console.log(`Sending: ${colorInput}`);
    const response = await fetch(`/api?input=${encodeURIComponent(colorInput)}`);
    const data = await response.json();
    const colorName = data[0].Name;
    console.log(colorName);
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
        size="large"
        onClick={handleTranslationRequest}
      >OK</Button>
      <div></div>
    </div>
  );
}
