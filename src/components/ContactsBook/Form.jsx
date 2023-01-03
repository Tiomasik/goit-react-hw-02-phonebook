import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  handlChange = (evt) => {
    const {name, value} = evt.currentTarget
    this.setState(
        {
            id: nanoid(),
            [name]: value,
        })
  }

  handlSubmit = (evt) => {
      evt.preventDefault()
      this.props.onSubmit(this.state)
      this.resetForm()
    }
    
    resetForm = () => {
        this.setState(
        { name: '', number: '' })
    }

  render() {
    const {name, number} = this.state

    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handlChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handlChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              />
          </label>
          <button type='submit'>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default Form;