import React, { Component} from 'react';
import styles from './Cbutton.module.css';

class Cbutton extends Component{
    constructor(props) {
        super(props)
      }




    render(){
        return(
            <button  className={styles.butstyle}  onClick={this.props.onClick}>
            {this.props.children}
        </button>
        );

    }
}

export default Cbutton;
