import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

// Estilo global para el body
document.body.style.background = "linear-gradient(180deg, #ffffff, #87ceeb)";
