import React, { useContext, useState } from 'react';
import styles from './Robots.module.css';
// import { appContext } from '../index';
// import { appContext } from '../App_fun';
import { appContext, appSetStateContext } from '../AppState';

interface RobotProps {
    id:number,
    name:string,
    email:string
}

// const Robot:React.FC<RobotProps> = (props) =>{
const Robot:React.FC<RobotProps> = ({id,name,email}) =>{
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart = () => {
        if(setState){
            setState(state => {
                return {
                    ...state,
                    shoppingCart:{
                        items:[...state.shoppingCart.items,{id,name}]
                    }
                }
            })
        }
    }
    return(
        <div className = {styles.cardContainer}>
            <img alt = 'robot' src = {`https://robohash.org/${id}`} />
            <h2> {name} </h2>
            <p> {email} </p>
            <p> {value.username} </p>
            <button onClick = {addToCart}>Add to Shooping Cart</button>
        </div>
    );
};

export default Robot;