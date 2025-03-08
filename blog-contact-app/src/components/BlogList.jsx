import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [uniqueTags, setUniqueTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    axios.get("https://dummyjson.com/posts")
      .then(response => {
        setPosts(response.data.posts);
        extractUniqueTags(response.data.posts);
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  const extractUniqueTags = (posts) => {
    const tags = new Set();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    setUniqueTags(["All", ...Array.from(tags)]);
  };

  const filteredPosts = posts.filter(post => 
    (selectedTag === "All" || post.tags.includes(selectedTag)) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.body.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Blog List</h1>

      <input
        type="text"
        placeholder="Search Blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}>
        {uniqueTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {currentPosts.map(post => (
          <div key={post.id} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}</p>
            <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
            <p>👍 {post.reactions.likes} 👎 {post.reactions.dislikes} 👀 {post.views} Views</p>
            <Link to={`/post/${post.id}`}>
              <button style={{ padding: "5px 10px", marginTop: "5px", cursor: "pointer" }}>Read More</button>
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ padding: "10px", marginRight: "10px", cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ padding: "10px", marginLeft: "10px", cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
