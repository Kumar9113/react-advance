import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Portal from './Portal/Portal'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const Kumar=ReactDOM.createRoot(document.getElementById("Kumar"));
Kumar.render(
  <React.StrictMode>
    <Portal></Portal>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
