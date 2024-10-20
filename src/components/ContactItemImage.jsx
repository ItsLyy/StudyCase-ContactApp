// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line
function ContactItemImage({ image }) {
  return (
    <div className="contact-item__image">
      <img src={image} alt="contact avatar" />
    </div>
  )
}

export default ContactItemImage;