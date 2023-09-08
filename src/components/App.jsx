// import { render } from '@testing-library/react';
import {AddContac} from "./contactForm/ContactForm";
import{ContactsList} from './contactList/ContactList'
import { Component } from 'react'; 
export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: ''
  }
    render(){
      // const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
    <AddContac/>
    <ContactsList  contacts ={ this.state.contacts}/>
    </>
  )
    }
 };

