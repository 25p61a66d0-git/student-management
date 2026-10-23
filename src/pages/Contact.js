import React, { useState } from "react";
function Contact() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const handleSubmit = (event) => {
 event.preventDefault();
 alert("Your message has been submitted.");
 setName("");
 setEmail("");
 setMessage("");
 };
 return React.createElement(
 "div",
 { className: "form-container" },
 React.createElement(
 "h1",
 null,
 "Contact Us"
 ),
 React.createElement(
 "form",
 { onSubmit: handleSubmit },
 React.createElement(
 "input",
 {
 type: "text",
 placeholder: "Your Name",
 value: name,
 onChange: (event) =>
 setName(event.target.value)
 }
 ),
 React.createElement(
 "input",
 {
 type: "email",
 placeholder: "Your Email",
 value: email,
 onChange: (event) =>
 setEmail(event.target.value)
 }
 ),
 React.createElement(
 "textarea",
 {
 placeholder: "Your Message",
 value: message,
 onChange: (event) =>
 setMessage(event.target.value)
 }
 ),
 React.createElement(
 "button",
 {
 type: "submit"
 },
 "Send Message"
 )
 )
 );
}
export default Contact;