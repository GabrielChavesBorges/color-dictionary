'use client'

import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import './page.css';

export default function Home() {

  const [colorCode, setColorCode] = useState('');
  const [colorName, setColorName] = useState('Color Name');

  async function handleTranslationRequest() {
    const endpoint = "https://www.thecolorapi.com/id?hex=";
    const response = await fetch(`${endpoint}?${colorCode}`);
    const data = await response.json();
    const colorName = data.name.value;
    setColorName(colorName);
  }

  function handleColorInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const isValidInput = checkInput(value)

    if (!isValidInput) {
      return;
    }

    setColorCode(value);
  }

  function checkInput(value: String): boolean {

    return true;
  }

  return (
    <div className="container">
      <div
        className='colorPick'
        style={{backgroundColor: "#" + colorCode}}
      />
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
        label="Color Name"
        value={colorName}
        variant="outlined"
        disabled
      />
    </div>
  );
}
