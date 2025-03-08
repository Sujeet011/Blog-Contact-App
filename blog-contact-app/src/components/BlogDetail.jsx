import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
      <p>👍 {post.reactions.likes} 👎 {post.reactions.dislikes} 👀 {post.views} Views</p>
      <Link to="/">
        <button style={{ padding: "10px", marginTop: "20px", cursor: "pointer" }}>Go Back</button>
      </Link>
    </div>
  );
};

export default BlogDetails;
