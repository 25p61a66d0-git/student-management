import React, { useState } from "react";
function Login() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const handleLogin = (event) => {
 event.preventDefault();
 if (email === "" || password === "") {
 alert("Please enter email and password.");
 return;
 }
 alert("Login successful!");
 setEmail("");
 setPassword("");
 };
 return React.createElement(
 "div",
 { className: "form-container" },
React.createElement(
 "h1",
 null,
 "Student Login"
 ),
 React.createElement(
 "form",
 { onSubmit: handleLogin },
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
 "Login"
 )
 )
 );
}
export default Login;