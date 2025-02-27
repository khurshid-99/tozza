import { Button } from "../../templates";

const AbSection2 = () => {
  return (
    <div className="font-poppins w-full lg:h-[70vh] flex items-center justify-between gap-x-[1.5vw] my-[1.5vw] ">
      <div className="w-[40%] h-full py-[3vw] pl-[3vw] bg-snow-gray flex flex-col justify-between items-start">
        <div className="w-full">
          <h1 className="text-[2.5vw] font-medium ">Our Vision</h1>
          <h4 className="text-nowrap tracking-[.5px] leading-[2.5vw] text-[1.3vw] mt-4">
            Tazza came to existence because <br />
            pepole eagerly wait for true 'Natural <br /> & Healthy' Food.
          </h4>
        </div>
        <div className="pb-[2vw]">
          <Button
            name="Shop Now"
            buttonStyle="uppercase font-semibold tracking-[2px] border-1 rounded-[50px] px-[3vw] py-[1vw] "
          />
        </div>
      </div>
      <div className="w-[60%] h-full ">
        <img
          src="/homePage/About us/our-vision.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
    </div>
  );
};

export default AbSection2;
