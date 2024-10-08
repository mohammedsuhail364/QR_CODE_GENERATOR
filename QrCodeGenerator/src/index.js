import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Car } from './Car';


// import { Adivce } from './formSamples/Adivce';
import { QrCode } from './component/QrCode';
import './component/QrCode.css';
// import { Example } from './component/Example';
// import { RegFrm } from './formSamples/RegFrm';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <App /> */}
    <QrCode />
    {/* <Example /> */}
    {/* < RegFrm /> */}
    {/* <Adivce /> */}
  {/* <Car/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
