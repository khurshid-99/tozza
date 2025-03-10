const NavRight = () => {
  return (
    <div className=" ">
      <ul className="flex items-center justify-between gap-7 xl:gap-15 text-nowrap ">
        <li className="flex items-center justify-center gap-2 xl:gap-5 lg:text-[1.5vw] xl:text-cxl">
          <img src="homePage/header/Wishlist.png" alt="" />
          Wish List
        </li>
        <li className="flex items-center justify-center gap-2 xl:gap-5 lg:text-[1.5vw] xl:text-cxl">
          <img src="homePage/header/Cart.png" alt="" />
          Cart
        </li>
        <li className="flex items-center justify-center gap-2 xl:gap-5 lg:text-[1.5vw] xl:text-cxl">
          <img src="homePage/header/login.png" alt="" />
          Login
        </li>
      </ul>
    </div>
  );
};

export default NavRight;
