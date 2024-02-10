import { useEffect } from "react";
import WorkCard from "../components/WorkCard";
import { setWorks } from "../store/works.js";
import { client } from "../utils/axios.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

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
    <div className="flex justify-center items-center w-full text-black dark:text-white mb-4">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          {works.map((work) => (
            <WorkCard data={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
