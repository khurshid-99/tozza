import { Button } from "../../templates";

const AbSection3 = () => {
  return (
    <div className="font-poppins w-full h-[60vh] lg:h-[40vh] xl:h-[70vh] flex flex-col lg:flex-row items-center justify-between gap-[1.5vw]  ">
      <div className="w-full lg:w-[60%] h-1/2 lg:h-full ">
        <img
          src="/homePage/About us/our-mission.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
      <div className="w-full lg:w-[40%] h-1/2 lg:h-full py-[3vw] pl-[3vw] bg-snow-gray flex flex-col justify-between items-start">
        <div className="w-full">
          <h1 className="lg:text-[2.5vw] font-medium ">Our Mission</h1>
          <h4 className="text-nowrap lg:tracking-[.5px] lg:leading-[2.5vw] lg:text-[1.3vw] mt-4">
            Tazza will straggle to return the <br /> actual taste & true benefit
            of natural <br />
            food; especially Meat, Chicken, Fish <br /> and Edible Oil
          </h4>
        </div>
        <div className="pb-[2vw]">
          <Button
            name="Shop Now"
            buttonStyle="uppercase text-nowrap text-[3vw] lg:text-[.8vw] lg:font-semibold lg:tracking-[2px] border-1 rounded-[50px] px-[5vw] py-[2.5vw] lg:px-[2.9vw] lg:py-[1.2vw] mt-2 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AbSection3;
