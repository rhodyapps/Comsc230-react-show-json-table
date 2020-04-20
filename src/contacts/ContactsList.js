import React, { Component } from 'react'
import ContactsData from '../contacts/contacts.json'
import './App.css'



class ContactsList extends Component {
  render () {
    return (
      <div className='App'>
        <RecipesList />
      </div>
      
    )
  }
}

export default ContactsList
