import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import '/src/assets/styles/index.css';
import '/src/assets/styles/fonts.css';
import '/src/assets/styles/animations.css';

createRoot(document.getElementById('root')).render(<App />);
