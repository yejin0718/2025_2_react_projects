import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './chp04/Clock';
import './chp04/Clock.css';
import InputTest from "./chp08/InputTest";
import Greeting from "./chp09/ex1/Greeting"
import LogInControl from "./chp09/ex2/LogInControl";
import MainPageWarning from "./chp09/ex3/MainPageWarning";
import LandingPage from "./chp09/closing_ex/LandingPage";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <LandingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
