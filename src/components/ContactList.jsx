// eslint-disable-next-line
import React from "react";
import ContactItem from "./ContactItem";

// eslint-disable-next-line
function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {
        // eslint-disable-next-line
        contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))
      }
    </div>
  )
}

export default ContactList;