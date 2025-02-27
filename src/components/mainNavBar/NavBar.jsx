import NavLeft from "./navItems/NavLeft";
import NavMeddile from "./navItems/NavMeddile";
import NavRight from "./navItems/NavRight";

const NavBar = () => {
  return (
    <div className="w-full font-Poppins ">
      <div className=" w-full flex flex-row items-center justify-between px-[5vw] py-3 lg:px-[7vw] lg:py-4 ">
        <NavLeft />
        <NavMeddile />
        <div className="hidden lg:inline-block">
          <NavRight />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
