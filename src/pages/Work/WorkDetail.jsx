import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/axios.js";
import "./style.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

const WorkDetail = () => {
  // Page params definitions
  const { id } = useParams();

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
    // <div className="flex justify-center items-center w-full text-black dark:text-white mb-8">
    <div className="work-detail-container">
      {work ? (
        <>
          <div className="">
            <img
              src={work.coverImageUrl}
              alt="cover-image"
              className="work-detail-cover-image"
            />
          </div>
          <div className="work-detail-name">{work.name}</div>
          <p>{work.description}</p>
          <ul>
            <li>
              <label className="work-detail-property-tag">Website</label>
              <a
                href={work.website}
                target="_blank"
                className="work-detail-link"
              >
                {work.website}
                <ArrowTopRightOnSquareIcon className="url-icon" />
              </a>
            </li>
            <li>
              <span className="work-detail-property-tag">Platform</span>
              <span className="break-all">{work.platform}</span>
            </li>
            <li>
              <span className="work-detail-property-tag">Stack</span>
              <span className="">{work.stack}</span>
            </li>
            <li>
              <span className="work-detail-property-tag">Source</span>
              <a
                href={work.source}
                target="_blank"
                className="work-detail-link"
              >
                {work.source}
                <ArrowTopRightOnSquareIcon className="url-icon" />
              </a>
            </li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    // </div>
  );
};

export default WorkDetail;
