import React, { Component } from "react";

class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      name: "",
    };
  }

  func = (price, name) => {
    price = price ?? 1;
    name = name ?? "MISC";
    console.log(
      `%cThe name of this product is ${name} and cost %c$${price} dollars,`,
      "color: blue",
      "color: green"
    );
  };

  render() {
    return (
      <div>
        <h1>Operator</h1>
        {this.func(5, "Dog Toy")}
        {this.func(7, "")}
        {this.func(0, undefined)}
      </div>
    );
  }
}

export default Operator;
