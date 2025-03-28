// Renders the app into the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import "./styles/global.css"; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
