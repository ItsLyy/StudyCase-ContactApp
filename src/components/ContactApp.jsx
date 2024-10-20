import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    }

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contact List</h1>
        <ContactList contacts={this.state.contacts} deleteEvent={this.onDeleteEventHandler}/>
      </div>
    )
  }

  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({ contacts })
  }
}

export default ContactApp;