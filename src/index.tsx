import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_fun';
import reportWebVitals from './reportWebVitals';
import { AppStateProvider } from './AppState';

// // -------------------------------------
// const aaContext = {name:'hello'}

// export const appContext = React.createContext(aaContext)
// // -------------------------------------

ReactDOM.render(
  <React.StrictMode>
    {/* <appContext.Provider value = {aaContext}> */}
    <AppStateProvider>
      <App />
    </AppStateProvider>
    {/* </appContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
