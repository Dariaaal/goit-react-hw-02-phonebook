import React, { Component } from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";
import initialContacts from "./contacts.json";
import Filter from "./Filter";
import { nanoid } from "nanoid";

export class App extends Component {

  state = {
    contacts: initialContacts,
    filter: '',
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

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  render(){
    const {contacts, filter} = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
      );

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
      <h1>Phonebook</h1>
      <CardForm onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={this.changeFilter}/>
      <CardList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
};
