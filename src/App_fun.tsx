import React, { createContext, useEffect, useState } from 'react';
import logo from './assets/icons/logo.svg';
// import './App.css';
import styles from './App.module.css';//In TS, before using, css MUST be declare first
// import robots from './moxdata/robots.json';
import Robot from './components/Robots';
import ShoppingCart from './components/ShoppingCart';

// -------------------------------------

// -------------------------------------
interface Props {

}
const App: React.FC<Props> = (props) => {

  const [count,setCount] = useState(0);
  const Handler = () => setCount(count + 1)
  const [robotGallery,setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false) //display loading status
  const [error,setError] = useState<string>() //capture error

  useEffect(() => {document.title = `Click ${count} times`},[count])
  useEffect( () => {
    //this part handle async: promise & async/await
    const fetchData = async ()=> {
      //set loading status
      setLoading(true)
      //capture error try&catch
    try{
      const responses = await fetch("http://jsonplaceholder.typicode.com/users")
      const data = await responses.json()
      setRobotGallery(data)
    }catch(e){
      setError(e.message)
    }
      setLoading(false)
    }
    fetchData()
    // .then(response => response.json())
    // .then(data => setRobotGallery(data))
  },[])
  return (
    <div className = {styles.app}>
      <div className = {styles.appHeader}>
        <img alt = 'title' src = {logo} className = {styles.appLogo}/>
        <h1>Welcome to Robot shop</h1>
      </div>
      <div>
      <button onClick = {Handler} > Click </button>
      <span>{count}</span>
      </div>
      <ShoppingCart />
      {(error !=='' || !error) && <div> {error} </div>}
      { !loading ?
      <div className = {styles.robotList}>
        {robotGallery.map((v,i) =>
          <Robot id = {v.id} name = {v.name} email = {v.email}/>
        )}
      {/* the arrow function body can't be wrapped by brace */}
      </div>:
      <div> Loading </div>
      }
    </div>
  );
}

export default App;
// export default createContext(new aaContext());
