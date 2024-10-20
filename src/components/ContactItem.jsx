// eslint-disable-next-line
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import ContactDeleteButton from "./ContactDeleteButton";

// eslint-disable-next-line
function ContactItem({ image, name, tag, id, deleteEvent }) {
  return (
    <div className="contact-item">
      <ContactItemImage image={image}/>
      <ContactItemBody name={name} tag={tag}/>
      <ContactDeleteButton id={id} deleteEvent={deleteEvent}/>
    </div>
  )
}

export default ContactItem;