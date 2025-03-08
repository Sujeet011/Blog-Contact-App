import React from "react";

function Navbar() {
  return React.createElement("nav", { className: "navbar" },
    React.createElement("div", { className: "nav-container" },
      React.createElement("h2", { className: "logo" }, "Blogify"),
      React.createElement("ul", { className: "nav-links" },
        React.createElement("li", null, React.createElement("a", { href: "#" }, "Blogs")),
        React.createElement("li", null, React.createElement("a", { href: "#contact" }, "Contact")) 
      )
      
    )
  );
}

export default Navbar;
