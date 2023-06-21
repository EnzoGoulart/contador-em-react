import React, { Component } from "react";
class Secao extends Component {
  render() {
    return (
      <div key={this.props.id}>
            <h3>{this.props.nome} tem {this.props.curtidas} {this.props.curtidas === 1? 'curtida': 'curtidas'}</h3>
            <hr/>
      </div>
    );
  }
}
export default Secao;