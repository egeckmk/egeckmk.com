import { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setAboutItems } from "../../store/abouts.js";
import { client } from "../../utils/axios.js";
import { formatDateMonthYearWithCapitalizedMonth } from "../../utils/dateFormats";

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
    <ol className="about-line">
      {aboutItems.map((item) => {
        return (
          <li key={item._id}>
            <div className="dot"></div>
            <div className="working-time">
              {formatDateMonthYearWithCapitalizedMonth(item.startDate)}
              {item.endDate &&
                ` - ${formatDateMonthYearWithCapitalizedMonth(item.endDate)}`}
            </div>
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default About;
