import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../utils/axios.js";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

const WorkDetail = () => {
  // Page params definitions
  const { id } = useParams();

  // Hooks definitions
  const navigate = useNavigate();

  // Local state definitions
  const [work, setWork] = useState();

  const getBlog = async () => {
    client
      .get(`api/v1/works/${id}`)
      .then((res) => {
        setWork(res.data.work);
      })
      .catch((err) => {
        toast.error(
          err.message + "\n\nThere's been a problem. Please try again later."
        );
      });
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div className="flex justify-center items-center w-full text-black dark:text-white mb-8">
      <div className="w-full">
        {work ? (
          <>
            <div className="">
              <img
                src={work.coverImageUrl}
                alt="cover-image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div className="text-4xl text-amber-400 underline underline-offset-8 font-extrabold mb-8">
              {work.name}
            </div>
            <p className="mb-2">{work.description}</p>
            <ul className="">
              <li className="mb-1">
                <span className="uppercase bg-amber-400 bg-opacity-20 text-amber-400 px-2 py-1 mr-2 text-sm rounded-sm">
                  Website
                </span>
                <a
                  href={work.website}
                  target="_blank"
                  className="text-amber-400 hover:underline"
                >
                  {work.website}
                  <ArrowTopRightOnSquareIcon className="h-4 ml-1 inline-flex" />
                </a>
              </li>
              <li className="mb-1">
                <span className="uppercase bg-amber-400 bg-opacity-20 text-amber-400 px-2 py-1 mr-2 text-sm rounded-sm">
                  Platform
                </span>
                <span className="break-all">{work.platform}</span>
              </li>
              <li className="mb-1">
                <span className="uppercase bg-amber-400 bg-opacity-20 text-amber-400 px-2 py-1 mr-2 text-sm rounded-sm">
                  Stack
                </span>
                <span className="">{work.stack}</span>
              </li>
              <li className="mb-1">
                <span className="uppercase bg-amber-400 bg-opacity-20 text-amber-400 px-2 py-1 mr-2 text-sm rounded-sm">
                  Source
                </span>
                <a
                  href={work.website}
                  target="_blank"
                  className="text-amber-400 hover:underline"
                >
                  {work.source}
                  <ArrowTopRightOnSquareIcon className="h-4 ml-1 inline-flex" />
                </a>
              </li>
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
