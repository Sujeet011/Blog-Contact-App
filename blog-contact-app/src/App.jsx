import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "src/components/BlogList";
import BlogDetails from "src/components/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
