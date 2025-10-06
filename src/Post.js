import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const Post = () => {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then((res) => fetch(res.default).then((r) => r.text()))
      .then((text) => {
        const { content } = matter(text);
        setPostContent(content);
      });
  }, [slug]);

  return (
    <div className="container">
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};

export default Post;
