import React from 'react';
import logo from './assets/icons/logo.svg';
// import './App.css';
import styles from './App.module.css';//In TS, before using, css MUST be declare first
import robots from './moxdata/robots.json';
import Robot from './components/Robots';
import ShoppingCart from './components/ShoppingCart';
import classes from '*.module.sass';

interface Props{

}

interface State{
  robotGallery: any
}

class App extends React.Component<Props,State>{
  constructor(props){
    super(props)
    this.state = {
      robotGallery:[]
    }
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => this.setState({robotGallery:data}));
  }

  render(){
    return (
      <div className = {styles.app}>
        <div className = {styles.appHeader}>
          <img alt = 'title' src = {logo} className = {styles.appLogo}/>
          <h1>Welcome to Robot shop</h1>
        </div>
        <ShoppingCart />
        <div className = {styles.robotList}>
          {this.state.robotGallery.map((v,i) => 
            <Robot id = {v.id} name = {v.name} email = {v.email}/>
          )}
        {/* the arrow function body can't be wrapped by brace */}
        </div>
      </div>
    );
  }
}

export default App;
