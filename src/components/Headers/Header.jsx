import Logo from "../Logo";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import { publicHeaderLinks } from "./links";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-[2] flex justify-between md:justify-evenly item-center py-8 dark:bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <Logo />
      <Menu>
        {publicHeaderLinks.map((item, i) => (
          <MenuItem to={item.link} name={item.name} key={i} />
        ))}
      </Menu>
    </div>
  );
};

export default Header;
