import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/blogIndex";

const Blog = () => (
  <div className="container">
    <h1>My Blog</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Blog;
