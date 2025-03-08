import React from "react";
import BlogList from "src/components/BlogList";

function BlogPage() {
  return React.createElement("div", null,
    React.createElement("h1", null, "Blogs"),
    React.createElement(BlogList)
  );
}

export default BlogPage;
