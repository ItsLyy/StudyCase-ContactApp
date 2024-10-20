// eslint-disable-next-line
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

// eslint-disable-next-line
function ContactItem({ image, name, tag }) {
  return (
    <div className="contact-item">
      <ContactItemImage image={image}/>
      <ContactItemBody name={name} tag={tag}/>
    </div>
  )
}

export default ContactItem;