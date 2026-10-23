import React, { useState } from "react";
function Register() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const handleRegister = (event) => {
 event.preventDefault();
 alert(
 "Registration successful for " + name
 );
 setName("");
 setEmail("");
 setPassword("");
 };
 return React.createElement(
 "div",
 { className: "form-container" },
 React.createElement(
 "h1",
 null,
 "Student Registration"
 ),
 React.createElement(
 "form",
 { onSubmit: handleRegister },
 React.createElement(
 "input",
 {
 type: "text",
 placeholder: "Enter Student Name",
 value: name,
 onChange: (event) =>
 setName(event.target.value)
 }
 ),
 React.createElement(
 "input",
 {
 type: "email",
 placeholder: "Enter Email",
 value: email,
 onChange: (event) =>
 setEmail(event.target.value)
 }
 ),
 React.createElement(
 "input",
 {
 type: "password",
 placeholder: "Enter Password",
 value: password,
 onChange: (event) =>
 setPassword(event.target.value)
 }
 ),
 React.createElement(
 "button",
 {
 type: "submit"
 },
 "Register"
 )
 )
 );
}
export default Register;