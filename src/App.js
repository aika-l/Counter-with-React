import React from "react";
import Button from "./component/Button";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const h1Class =
      this.state.count > 0 ? "green" : this.state.count < 0 ? "red" : "";
    return (
      <div>
        <h1 className={h1Class}>{this.state.count}</h1>
        <Button btnName="Increment" func={this.increment} />
        <Button btnName="Reset" func={this.reset} />
        <Button btnName="Decrement" func={this.decrement} />
      </div>
    );
  }
}
export default App;
