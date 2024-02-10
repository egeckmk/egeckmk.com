import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBlogs } from "../store/blogs.js";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  const getBlogs = async () => {
    const response = await axios.get(
      "https://egeckmk-com-backend.onrender.com/api/v1/blogs"
    );
    if (response.data) {
      dispatch(setBlogs(response.data.data));
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex justify-center items-center w-full text-black dark:text-white mb-4">
      <div className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {blogs.map((item) => (
            <BlogCard data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
