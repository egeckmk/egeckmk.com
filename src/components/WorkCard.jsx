import { Link } from "react-router-dom";

const WorkCard = ({ data }) => {
  return (
    <Link to={data._id} key={data}>
      <div className="rounded-t-2xl flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <img
              className="rounded-2xl"
              src={data.coverImageUrl}
              alt={data.name + "-cover-image"}
            />
          </div>
          <div className="text-2xl font-semibold text-center">{data.name}</div>
          <p className="text-sm font-extralight mb-3 dark:text-gray-300 text-center">
            {data.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
