import { Link } from "react-router-dom";

const MenuItem = ({ to, name }) => {
  return (
    <li className="flex items-center w-full">
      <Link
        className="text-[1.1rem] font-medium dark:text-white w-full underline md:no-underline my-1 text-black mx-0 md:mx-[25px] md:my-0 transition-all ease duration-300 hover:text-amber-400 dark:hover:underline dark:hover:underline-offset-8 hover:underline hover:underline-offset-8 dark:hover:text-amber-400 md:dark:hover:scale-110 md:hover:scale-110"
        to={to}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuItem;
