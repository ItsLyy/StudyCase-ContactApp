// eslint-disable-next-line
import React from "react";
import ContactItem from "./ContactItem";

// eslint-disable-next-line
function ContactList({ contacts, deleteEvent }) {
  return (
    <div className="contact-list">
      {
        // eslint-disable-next-line
        contacts.map((contact) => (
          <ContactItem key={contact.id} id={contact.id} deleteEvent={deleteEvent} {...contact} />
        ))
      }
    </div>
  )
}

export default ContactList;