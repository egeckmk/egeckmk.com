import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAboutItems } from "../store/abouts.js";
import AboutItem from "../components/AboutItem.jsx";

const About = () => {
  const dispatch = useDispatch();
  const aboutItems = useSelector((state) => state.abouts.items);
  const getAboutItems = async () => {
    const response = await axios.get(
      "https://egeckmk-com-backend.onrender.com/api/v1/abouts"
    );
    if (response.data) {
      dispatch(setAboutItems(response.data.data));
    }
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
