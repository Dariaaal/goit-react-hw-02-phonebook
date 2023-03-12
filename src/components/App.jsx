import React, { Component } from "react";
import CardForm from "./CardForm";

export class App extends Component {

  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  render(){
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <CardForm onSubmit={this.formSubmitHandler}/>
      </div>
    );
  }
};
