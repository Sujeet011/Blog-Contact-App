import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import BlogList from "./components/BlogList";
import "./index.css";

function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(Navbar, null),
    React.createElement(
      "h1",
      { style: { textAlign: "center", color: "#333", margin: "20px" } },
      "Welcome to Blogify"
    ),
    React.createElement(BlogList, null),
    React.createElement(ContactForm, null)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(
    BrowserRouter, // Wrap the App with BrowserRouter
    null,
    React.createElement(React.StrictMode, null, React.createElement(App, null))
  )
);
