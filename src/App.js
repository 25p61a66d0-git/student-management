import React from "react";
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
 return React.createElement(
 BrowserRouter,
 null,
 React.createElement(
 Navbar
 ),
 React.createElement(
 Routes,
 null,
 React.createElement(
 Route,
 {
 path: "/",
 element: React.createElement(Home)
 }
 ),
 React.createElement(
 Route,
 {
 path: "/register",
 element: React.createElement(Register)
 }
 ),
 React.createElement(
 Route,
 {
 path: "/login",
 element: React.createElement(Login)
 }
 ),
 React.createElement(
 Route,
 {
 path: "/about",
 element: React.createElement(About)
 }
 ),
 React.createElement(
 Route,
 {
 path: "/contact",
 element: React.createElement(Contact)
 }
 )
 )
 );
}
export default App;