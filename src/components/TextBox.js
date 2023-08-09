// src/components/TextBox.js
import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = ({ label, value, onChange }) => {
  return (
    <div className="textbox-container">
      <TextField
        fullWidth
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
