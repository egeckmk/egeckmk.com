import { useEffect } from "react";
import { setWorks } from "../../store/works.js";
import { client } from "../../utils/axios.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import "./style.css";
import { Link } from "react-router-dom";

const Works = () => {
  // Hooks definitions
  const dispatch = useDispatch();

  // Global states definitions
  const works = useSelector((state) => state.works.works);

  const getWorks = async () => {
    client
      .get("/api/v1/works")
      .then((res) => {
        dispatch(setWorks(res.data.works));
      })
      .catch((err) => {
        toast.error(
          err.message + "\n\nThere's been a problem. Please try again later."
        );
      });
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="works-grid">
      {works.map((work) => (
        <Link to={work._id} key={work._id}>
          <div className="work-card">
            <img
              className="works-cover-image-thumbnail"
              src={work.coverImageUrl}
              alt={work.name + "-cover-image"}
            />
            <h5 className="works-name">{work.name}</h5>
            <p className="works-short-description">{work.shortDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Works;
