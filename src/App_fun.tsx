import React from 'react';
import logo from './assets/icons/logo.svg';
// import './App.css';
import styles from './App.module.css';//In TS, before using, css MUST be declare first
import robots from './moxdata/robots.json';
import Robot from './components/Robots';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className = {styles.app}>
      <div className = {styles.appHeader}>
        <img alt = 'title' src = {logo} className = {styles.appLogo}/>
        <h1>Welcome to Robot shop</h1>
      </div>
      <ShoppingCart />
      <div className = {styles.robotList}>
        {robots.map((v,i) => 
          <Robot id = {v.id} name = {v.name} email = {v.email}/>
        )}
      {/* the arrow function body can't be wrapped by brace */}
      </div>
    </div>
  );
}

export default App;
