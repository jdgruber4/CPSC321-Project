import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { useHistory } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const YourComponent = () => {
//   const history = useHistory();

//   const handleClick = () => {
//   history.push("/stat.js");
// }

//   return (
//     <div>
//     <button onClick={handleClick} type="button" />
//     </div>
//   );
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
