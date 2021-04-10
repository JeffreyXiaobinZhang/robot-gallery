import React, { useEffect, useState } from 'react';
import logo from './assets/icons/logo.svg';
import styles from './App.module.css';//In TS, before using, css MUST be declare first
import Robot from './components/Robots';
import ShoppingCart from './components/ShoppingCart';

interface Props {

}
const App: React.FC<Props> = (props) => {
  const [count,setCount] = useState(0);
  const Handler = () => setCount(count + 1)
  const [robotGallery,setRobotGallery] = useState<any>([])
  useEffect(() => {document.title = `Click ${count} times`},[count])
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setRobotGallery(data))
  },[])
  return (
    <div className = {styles.app}>

    </div>
  );
}

export default App;
