import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
 return React.createElement(
 "nav",
 { className: "navbar" },
 React.createElement(
 "h2",
 null,
 "Student Management"
 ),
 React.createElement(
 "div",
 { className: "nav-links" },
 React.createElement(
 Link,
 { to: "/" },
 "Home"
 ),
 React.createElement(
 Link,
 { to: "/register" },
 "Register"
 ),
 React.createElement(
 Link,
 { to: "/login" },
 "Login"
 ),
 React.createElement(
 Link,
 { to: "/about" },
 "About"
 ),
 React.createElement(
 Link,
 { to: "/contact" },
 "Contact"
 )
 )
 );
}
export default Navbar;