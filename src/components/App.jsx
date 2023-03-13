import React, { Component } from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";

export class App extends Component {

  state = {
    contacts: initialContacts,
  };

  deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }))
  }

  formSubmitHandler = data => {
    console.log(data);
    data.id = nanoid();
        this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
    }))
  }

  render(){
    const {contacts} = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <CardForm onSubmit={this.formSubmitHandler}/>
      <CardList contacts={contacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
};
