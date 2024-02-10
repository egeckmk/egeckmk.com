const Menu = ({ children }) => {
  return (
    <div className="w-6/12">
      <ul className="hidden md:flex w-full">{children}</ul>
    </div>
  );
};

export default Menu;
