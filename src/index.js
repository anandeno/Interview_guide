import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { CssBaseline } from '@mui/material';
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

