const Navbar = () => {
  return (
    <nav className="  font-roboto h-16 max-h-20 max-w-[80%] mx-auto flex justify-between  items-center px-8">
      <div className="appname">ToDo App</div>
      <ul className="flex gap-4">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
