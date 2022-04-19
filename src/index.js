import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Data from './Data'
import CustomizeProfile from './CustomizeProfile';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <CustomizeProfile />
    <Data />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
