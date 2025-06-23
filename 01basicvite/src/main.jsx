import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(areactElement);
