import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../store/blogs.js";
import { client } from "../../utils/axios.js";
import BlogCard from "../../components/BlogCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./style.css";

const Blog = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  const getBlogs = async () => {
    client
      .get("/api/v1/blogs")
      .then((res) => {
        dispatch(setBlogs(res.data.data));
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
    <div className="blogs-container">
      {blogs.map((item) => (
        <div className="blog-card" key={item._id}>
          <img
            className="blog-cover-image-thumbnail"
            src={item.coverImageUrl}
            alt={item.title + "-cover-image"}
          />
          <h5 className="blog-title">{item.title}</h5>
          <p
            className="blog-card-content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></p>
          <Link className="read-more" to={`${item._id}`}>
            <div>Read more</div>
            <ArrowRightIcon className="right-arrow" />
          </Link>
        </div>
        // <BlogCard data={item} />
      ))}
    </div>
  );
};

export default Blog;
