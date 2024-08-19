// src/components/Blog.tsx
import React, { useEffect, useState } from "react";
import { fetchBlog, Blogs } from "../Services/blogService";
import "./blog.css";
import Heading from "./Heading";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogData = await fetchBlog();
        setBlogs(blogData);
        setIsLoading(false);
      } catch (error) {
        // setError(error.message);
        setIsLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Heading heading="Blogs" />
    <div className="main-container">

    <div className="container-blog">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-post">
          <h2>{blog.title}</h2>
          <p>
            by {blog.author} on {new Date(blog.date).toLocaleDateString()}
          </p>
          {blog.imgUrl && <img src={blog.imgUrl} alt={blog.title} />}
          <p>{blog.content}</p>
          <div className="tags">
            <strong>Tags: </strong>
            {blog.tags.join(", ")}
          </div>
          <div className="likes">
            <strong>Likes: </strong>
            {blog.likes}
          </div>
          <div className="comments">
            <h3>Comments</h3>
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>
                    <strong>{comment.name}</strong> on{" "}
                    {new Date(comment.date).toLocaleDateString()}:
                  </p>
                  <p>{comment.comment}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default Blog;
