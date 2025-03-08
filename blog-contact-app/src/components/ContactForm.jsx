import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return React.createElement("section", { id: "contact", className: "contact-form-container" },
    React.createElement("form", { className: "contact-form", onSubmit: handleSubmit },
      React.createElement("h2", null, "Contact Us"),
      React.createElement("input", { type: "text", name: "name", placeholder: "Name", required: true, onChange: handleChange }),
      React.createElement("input", { type: "email", name: "email", placeholder: "Email", required: true, onChange: handleChange }),
      React.createElement("select", { name: "subject", required: true, onChange: handleChange },
        React.createElement("option", { value: "" }, "Select Subject"),
        React.createElement("option", { value: "Coach" }, "Coach"),
        React.createElement("option", { value: "Institute/Organisation" }, "Institute/Organisation"),
        React.createElement("option", { value: "Trainee/Coach" }, "Trainee/Coach")
      ),
      React.createElement("textarea", { name: "message", placeholder: "Message", required: true, onChange: handleChange }),
      React.createElement("input", { type: "text", name: "phone", placeholder: "Phone (Optional)", onChange: handleChange }),
      React.createElement("button", { type: "submit" }, "Submit")
    )
  );
}

export default ContactForm;
