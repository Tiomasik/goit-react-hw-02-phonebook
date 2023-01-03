import React, { Component } from 'react';
import Form from './ContactsBook/Form';
import ContactListv from './ContactsBook/ContactList'
import Filter from './ContactsBook/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = (data) => {
    const { contacts } = this.state
    if (!(contacts.filter(contact => contact.name === data.name)).length) {
      this.setState(({ contacts }) => (
        {
        contacts: [...contacts, data],
      }));
    } else alert(`${data.name} is already in contacts`)
  };


  deleteContact = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  changeFilter = (evt) => {
      const {value} = evt.currentTarget
      this.setState(
        { filter: value, })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }


  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <Filter value={ filter } changeFilter={ this.changeFilter } />
        <ContactListv contacts={ visibleContacts } deleteContact={ this.deleteContact } />
      </div>
    );
  }
}

export default App;
