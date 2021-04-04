import { ReactComponent } from '*.svg';
import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';

interface Props{

}
interface State{
    isOpen:boolean
}

class ShoppingCart extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            isOpen:true,
        };
    }

    handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.target: 指向鼠标点击的HTML元素
        // e.currentTarget：指向事件绑定的元素，比如点击的按钮
        //重要应用：如果只想在点解<span>元素时，指向事件，就用到如下语法
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            this.setState({isOpen:!this.state.isOpen})
        }
    }

    render(){
        return(
            <div className = {styles.cartContainer}>
                <button className = {styles.button} onClick = {this.handleClick}> <FiShoppingCart /> <span> Shopping Cart 2 (item) </span></button>
                <div className = {styles.cartDropDown} style = {{display: this.state.isOpen?"none":"block"}}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;