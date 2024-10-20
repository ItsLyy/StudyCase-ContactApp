import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    }

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.addData = this.addData.bind(this);
  }

  render() {
    return (
      <div className="contact-app">
        <h2>Form Input</h2>
        <ContactInput addData={this.addData}/>
        <h2>Contact List</h2>
        <ContactList contacts={this.state.contacts} deleteEvent={this.onDeleteEventHandler}/>
      </div>
    )
  }

  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({ contacts })
  }

  addData({ name, tag }) {
    this.setState((previousState) => {
      return {
        contacts: [
        ...previousState.contacts,
        {
          id: +new Date(),
          name,
          tag,
          image: '/images/default.jpg', 
        }
      ]}
    })
  }
}

export default ContactApp;