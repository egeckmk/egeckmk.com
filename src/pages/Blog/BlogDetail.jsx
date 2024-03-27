import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/axios.js";
import { formatDateFullDateTime } from "../../utils/dateFormats.js";
import "./style.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const getBlogs = async () => {
    client
      .get(`/api/v1/blogs/${id}`)
      .then((res) => {
        setBlog(res.data.blog);
      })
      .catch((err) => {
        toast.error(
          err.message + "\n\nThere's been a problem. Please try again later."
        );
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="blog-detail-container">
      <img
        src={blog.coverImageUrl}
        alt="cover-image"
        className="blog-detail-cover-image"
      />
      <h1 className="blog-detail-title">{blog.title}</h1>
      <div className="blog-detail-info">
        <span className="blog-detail-date">
          {formatDateFullDateTime(blog.updatedAt)}
        </span>
        <span className="blog-detail-author">{blog.author}</span>
      </div>
      <p
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></p>
    </div>
  );
};

export default Blog;
