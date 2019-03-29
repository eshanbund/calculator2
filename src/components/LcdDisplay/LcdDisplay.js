import React ,{ Component} from 'react';
import styles from './LcdDisplay.module.css';


class LcdDisplay extends Component {
    render() {
        return(
            <div className={styles.lcdStyles}    >
                {this.props.children}
               
                <p className={styles.memo} >{this.props.memo}</p>
            </div >  
          )
    }
}

export default LcdDisplay;