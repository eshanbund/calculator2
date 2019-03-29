import React, { Component } from 'react';
import styles from  './Numpad.module.css';

import Cbutton from './../Cbutton/Cbutton';
import LcdDisplay from './../LcdDisplay/LcdDisplay';


class Numpad extends Component {
    constructor (props) {
      super(props);  
      this.state = {   
        FirstVal: '',    // init first value
        SecondVal: '',   // init Second value
        DisplayVal:'0',   // init Second value
        operatorFlag:'', // initialise first value when false and then second value when true
        Memo:'',//use to keep log calculator
      };      
      //console.log(this.state);
    }


/////////////////////////////////////////
// Button event update the 
/////////////////////////////////////////
    onClick =(NumpadVal)=>{
      
      /* Check what key was pressed */
      
      var Memo= this.state.FirstVal+ '+' + this.state.SecondVal;
   
     


      // concat the value as text 
      var  txt ; 
      if (this.state.operatorFlag==='') {     
       
        txt =this.state.FirstVal +  NumpadVal; 
   
        
        this.setState({           
          FirstVal : txt,// this.state.FirstVal +  NumpadVal,
          DisplayVal: txt,//this.state.FirstVal + v 
          Memo:txt,
          }) 
          console.log('this.state.FirstVal' + txt);
      }
      else
      {
        console.log('this.state.operatorFlag' + this.state.operatorFlag);
        txt =this.state.SecondVal +  NumpadVal; 
        this.setState({           
          SecondVal : txt,// this.state.FirstVal +  NumpadVal,
          DisplayVal: txt,//this.state.FirstVal + v 
          Memo: txt
          },
          () => {console.log('this.state.operatorFlag==>' +this.state.operatorFlag + '   this.state.FirstVal=>'+this.state.FirstVal +   '-----' +'this.state.SecondVal'+ this.state.SecondVal); }
          );
      }
            
        ;     
      //this.display(txt); Question: can we adda function in the constructor like a sort of initialisation
      //alert('NumpadVal=>'+ NumpadVal);
      
    }

    


/////////////////////////////////////////
// Takes care of the display
/////////////////////////////////////////

    display=(DisVal)=>{
      this.setState({           
        DisplayVal: 'second vale',//this.state.FirstVal + v 
        });
      }

/////////////////////////////////////////
// Clean Calculator
/////////////////////////////////////////     
    cleanCalc = () => {
        this.setState({
          FirstVal: '',    // init first value
          SecondVal: '',   // init Second value
          DisplayVal:'',   // init Second value
          Memo:''
        });
        //this.display('READY');
        //alert('cleanCalc');
    }

    operator = (op) => {
     

      var result;
     // result =parseInt(this.state.FirstVal)+parseInt(this.state.SecondVal);

    

      if (op==='='){
          //alert ('switch->' +  this.state.operatorFlag );
          switch(this.state.operatorFlag){
            case'+' : result =parseInt(this.state.FirstVal)+parseInt(this.state.SecondVal); break;
            case'-' : result =parseInt(this.state.FirstVal)-parseInt(this.state.SecondVal); break;
            case'x' : result =parseInt(this.state.FirstVal)*parseInt(this.state.SecondVal); break;
            case'/' : result =parseInt(this.state.FirstVal)/parseInt(this.state.SecondVal); break;
            case'C' : this.cleanCalc(); break;
        }



         // var Memo= this.state.FirstVal+ '+' + this.state.SecondVal;
          console.log('this.state.FirstVal=>'+this.state.FirstVal +   '-----' +'this.state.SecondVal'+ this.state.SecondVal + ' = ' + result);
          //this.display(999);
          this.setState({
            FirstVal: '',    // init first value
            SecondVal: '',   // init Second value
            DisplayVal:result,
            operatorFlag:'',
            Memo: this.state.FirstVal+ ' ' +this.state.operatorFlag + ' ' +this.state.SecondVal,
          });
          
      }
      else
      {



        this.setState({
          SecondVal: '',   // init Second value
          operatorFlag:op,
        });
      }
      //this.display('READY');
      //alert('cleanCalc');
      //this.Display('ttt');
  }


/////////////////////////////////////////
// Choose what onclick to pass
///////////////////////////////////////// 
    numpadRouter = (prop)  => {

    }

/////////////////////////////////////////
// Render function
///////////////////////////////////////// 

  render() {
    return (
      <div className={styles.App}>
          <LcdDisplay memo={this.state.Memo} >{this.state.DisplayVal}</LcdDisplay>

          <br/>

          <Cbutton id='1' onClick={() => this.onClick(1)}>1</Cbutton>
          <Cbutton id='2' onClick={() => this.onClick(2)}>2</Cbutton>
          <Cbutton id='3' onClick={() => this.onClick(3)}>3</Cbutton>
          <Cbutton  onClick={() => this.operator('-')}>-</Cbutton>
          <br/>

          <Cbutton onClick={() => this.onClick(4)}>4</Cbutton>
          <Cbutton onClick={() => this.onClick(5)}>5</Cbutton>
          <Cbutton onClick={() => this.onClick(6)}>6</Cbutton>
          <Cbutton onClick={() => this.operator('+')}>+</Cbutton>
          <br/>

          <Cbutton onClick={() => this.onClick(7)}>7</Cbutton>
          <Cbutton onClick={() => this.onClick(8)}>8</Cbutton>
          <Cbutton onClick={() => this.onClick(9)}>9</Cbutton>
          <Cbutton  onClick={() => this.operator('x')}>x</Cbutton>
          <br/>
          <Cbutton id='C' onClick={() => this.cleanCalc()}>C</Cbutton>
          <Cbutton onClick={() => this.onClick(0)}>0</Cbutton>
          <Cbutton  onClick={() => this.operator('/')}>/</Cbutton>
          <Cbutton  onClick={() => this.operator('=')}>=</Cbutton>
          <br/>
          
      </div>
    );
  }
}

export default Numpad;




