import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/images/brief-400.png";
import "./assets/images/employee-tracker-400.png";
import "./assets/images/employee-directory-400.png";
import "./assets/images/pet-seeker-palooza-400.png";
import "./assets/images/portfolio-400.png";
import "./assets/images/workout-tracker-400.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// // ref unit 20 activity 14
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));
