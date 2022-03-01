import React, { Component } from "react";

class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2
    });
  };

  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 * n2
    });
  };

  subt = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 - n2
    });
  };

  adc = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: parseInt(n1) + parseInt(n2)
    });
  };

  clear = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: 0
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    });
  };

  render() {
    return (
      <div className="contain-calculator">
        <h1>Calculadora</h1>
        <input onChange={this.handleChange1} />
        <input onChange={this.handleChange2} />
        <div className="contain-buttons">
          <button onClick={this.div}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.subt}>-</button>
          <button onClick={this.adc}>+</button>
          <button onClick={this.clear}>C</button>
        </div>
        <h2>{this.state.res}</h2>
      </div>
    );
  }
}
export default App;
