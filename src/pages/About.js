import React from "react";

const h = React.createElement;

export default function About() {
  return h(
    "div",
    { className: "page" },
    h("h1", null, "About Us"),
    h("p", null, "The Student Management System is a React-based application."),
    h("p", null, "It helps manage student registration and login information.")
  );
}