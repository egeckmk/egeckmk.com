import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../store/blogs.js";
import { client } from "../utils/axios.js";
import BlogCard from "../components/BlogCard";

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
