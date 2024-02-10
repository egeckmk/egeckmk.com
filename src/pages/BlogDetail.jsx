import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatDateFullDateTime } from "../utils/dateFormats";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const getBlogs = async () => {
    const response = await axios.get(
      `https://egeckmk-com-backend.onrender.com/api/v1/blogs/${id}`
    );
    if (response.data) {
      setBlog(response.data.blog);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex justify-center items-center w-full text-black dark:text-white">
      <div className="w-full">
        <div>
          <img
            src={blog.coverImageUrl}
            alt="cover-image"
            className="h-96 w-full mb-4"
          />
        </div>
        <div className="text-4xl text-amber-400 underline underline-offset-8 font-extrabold mb-8">
          {blog.title}
        </div>
        <div className="font-extralight">
          {formatDateFullDateTime(blog.updatedAt)}
        </div>
        <div className="font-extralight">{blog.author}</div>
        <div
          className="font-extralight mb-8"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
