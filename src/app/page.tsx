'use client'

import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import './page.css';

export default function Home() {

  const [colorInput, setColorInput] = useState('');
  const [colorName, setColorName] = useState('Color Name');

  async function handleTranslationRequest() {
    console.log(`Sending: ${colorInput}`);
    const response = await fetch(`/api?input=${encodeURIComponent(colorInput)}`);
    const data = await response.json();
    const colorName = data[0].Name;
    setColorName(colorName);
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
        id="color-code"
        label="Color Code"
        variant="outlined"
        onChange={handleColorInputChange}
      />
      <Button
        className="button"
        variant="outlined"
        size="large"
        onClick={handleTranslationRequest}
      >{'>'}</Button>
      <TextField
        id="color-name"
        value={colorName}
        variant="outlined"
        disabled
      />
    </div>
  );
}
