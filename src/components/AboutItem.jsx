import { formatDateMonthYearWithCapitalizedMonth } from "../utils/dateFormats";

const AboutItem = (props) => {
  return (
    <li className="mb-10 ml-4" key={props.data._id}>
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:bg-amber-400 bg-amber-400"></div>
      <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {formatDateMonthYearWithCapitalizedMonth(props.data.startDate)}
        {props.data.endDate &&
          ` - ${formatDateMonthYearWithCapitalizedMonth(props.data.endDate)}`}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {props.data.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {props.data.description}
      </p>
    </li>
  );
};

export default AboutItem;
