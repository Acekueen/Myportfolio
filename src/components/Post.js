import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import "./Post.css";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: "", data: {} });

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setPost({
          content: parsed.content,
          data: parsed.data
        });
      });
  }, [slug]);

  return (
    <article className="blog-post-section">
      <div className="container">
        <div className="blog-post-content">
          {post.data.title && (
            <header className="blog-post-header">
              <h1 className="blog-post-title">{post.data.title}</h1>
              {post.data.description && (
                <p className="blog-post-description">{post.data.description}</p>
              )}
              {post.data.date && (
                <time className="blog-post-date" dateTime={post.data.date}>
                  {new Date(post.data.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </header>
          )}
          <div className="blog-post-body">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
