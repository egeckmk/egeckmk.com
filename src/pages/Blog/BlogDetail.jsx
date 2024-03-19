import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/axios.js";

import { formatDateFullDateTime } from "../../utils/dateFormats.js";
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
