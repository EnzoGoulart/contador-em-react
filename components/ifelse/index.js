import React, { Component} from "react";

class Logado extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: true
        }
    }
  
    render(){
        return(
            <div>
                {this.state.login ? 
        <div><h2>Voce esta logado</h2></div>: <h2>Faça o login</h2>
      }
            </div>
        )
    }
}

export default Logado