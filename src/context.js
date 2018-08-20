import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Alana Doe",
        email: "adoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 3,
        name: "Americo Doe",
        email: "americo@gmail.com",
        phone: "555-555-5555"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
