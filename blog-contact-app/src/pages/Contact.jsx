import React from "react";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return React.createElement("div", null,
    React.createElement("h1", null, "Contact Us"),
    React.createElement(ContactForm)
  );
}

export default ContactPage;
