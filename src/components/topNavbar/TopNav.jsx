import { Button } from "../templates";

const TopNav = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between py-2 lg:py-4 px-[7vw] gap-7 bg-bright-sun-yellow relative lg:justify-center font-poppins ">
      <h4 className="text-nowrap text-sm lg:text-cxl text-center">
        Order today and get free Shipping on your First Delivery
      </h4>
      <Button
        name="Order Now"
        buttonStyle="bg-primary text-sm lg:text-lg font-medium text-secondary rounded-[50px] -mt-5 lg:mt-0 px-8 py-2 lg:py-3 text-nowrap "
      />
    </div>
  );
};

export default TopNav;
