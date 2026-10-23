import React from "react";

const h = React.createElement;

export default function Home() {
  return h(
    "div",
    { className: "page" },
    h("h1", null, "Student Management System"),
    h("p", null, "Welcome to the Student Management System."),
    h("p", null, "You can register students, login, and view information about the system.")
  );
}