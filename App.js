import React, { Component } from 'react';
import './appcss.css'
class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            time: 0,
            txtbtn: 'Iniciar'
         }     
         this.aumentar = this.aumentar.bind(this)
         this.timer = null
    }
    aumentar(){
      if(this.state.txtbtn === 'Pausar'){
        clearInterval(this.timer)
        this.timer = null
        console.log('aq')
        this.state.txtbtn = 'Iniciar'
      }else{
      this.timer = setInterval(()=>{
        this.state.time += 0.1
        this.state.txtbtn = 'Pausar'
        this.setState(this.state)
      },100)
    }
    this.setState(this.state)
  }
    render(){
        return(
            <div className='main'>
              <div className='contador'>{this.state.time.toFixed(1)}</div>
              <div className='botoes'>
                <button onClick={this.aumentar}>{this.state.txtbtn}</button>
                <button onClick={()=>{this.setState({time: 0})}}>Zerar</button>
              </div>
            </div>         
        );
    }
}

export default App;