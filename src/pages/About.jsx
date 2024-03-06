import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAboutItems } from "../store/abouts.js";
import { client } from "../utils/axios.js";
import AboutItem from "../components/AboutItem.jsx";

const About = () => {
  const dispatch = useDispatch();
  const aboutItems = useSelector((state) => state.abouts.items);

  const getAboutItems = async () => {
    client
      .get("/api/v1/abouts")
      .then((res) => {
        dispatch(setAboutItems(res.data.data));
      })
      .catch((err) => {
        toast.error(
          err.message + "\n\nThere's been a problem. Please try again later."
        );
      });
  };

  useEffect(() => {
    getAboutItems();
  }, []);

  return (
    <div className="flex justify-center items-center w-full text-black dark:text-white">
      <div className="w-full">
        <ol className="relative border-l border-black dark:border-white">
          {aboutItems.map((item) => {
            return <AboutItem data={item} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default About;
