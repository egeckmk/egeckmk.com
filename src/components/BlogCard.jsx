import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const detailUrl = `${props.data._id}`;
  return (
    <div className="border border-amber-400 dark:border-amber-400 rounded-2xl flex flex-col justify-between">
      <div>
        <div className="mb-2">
          <img
            className="rounded-t-2xl"
            src={props.data.coverImageUrl}
            alt="cover-image"
          />
        </div>
        <div className="px-3">
          <div className="text-2xl font-semibold">{props.data.title}</div>
          <div
            className="text-sm font-extralight mb-3 dark:text-gray-300 blog-card-content"
            dangerouslySetInnerHTML={{ __html: props.data.content }}
          ></div>
        </div>
      </div>
      <div className="px-3">
        <Link
          className="flex justify-between items-center duration-700 hover:scale-105 cursor-pointer bg-amber-400 w-full rounded-lg text-base px-2 py-2 mb-3"
          to={detailUrl}
        >
          <div>Read more</div>
          <ArrowRightIcon className="h-6" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
