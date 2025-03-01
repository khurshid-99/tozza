import { Button } from "../../templates";

const AbSection2 = () => {
  return (
    <div className="font-poppins w-full h-[60vh] lg:h-[40vh] xl:h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-[1.5vw] my-[1.5vw] ">
      <div className="w-full lg:w-[40%] h-1/2 lg:h-full py-[3vw] pl-[3vw] bg-snow-gray flex flex-col justify-between items-start">
        <div className="w-full h-full ">
          <h1 className="lg:text-[2.5vw] font-medium ">Our Vision</h1>
          <h4 className="text-nowrap lg:tracking-[.5px] lg:leading-[2.5vw] lg:text-[1.3vw] mt-4">
            Tazza came to existence because <br />
            pepole eagerly wait for true 'Natural <br /> & Healthy' Food.
          </h4>
        </div>
        <div className="pb-[2vw]">
          <Button
            name="Shop Now"
            buttonStyle="uppercase text-nowrap text-[3vw] lg:text-[.8vw] lg:font-semibold lg:tracking-[2px] border-1 rounded-[50px] px-[5vw] py-[2.5vw] lg:px-[2.9vw] lg:py-[1.2vw] mt-2 lg:mt-0 "
          />
        </div>
      </div>
      <div className="w-full lg:w-[60%] h-1/2 lg:h-full ">
        <img
          src="/homePage/About us/our-vision.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
    </div>

    // ----------------------

    // <div className="font-poppins w-full lg:h-[40vh] xl:h-[70vh] flex items-center justify-between gap-x-[1.5vw] my-[1.5vw] ">
    //   <div className="w-[40%] h-full py-[3vw] pl-[3vw] bg-snow-gray flex flex-col justify-between items-start">
    //     <div className="w-full">
    //       <h1 className="text-[2.5vw] font-medium ">Our MOtto</h1>
    //       <h4 className="text-nowrap text-[1.3vw] mt-4">
    //         Eat Tazza (fresh) be Tazza (healty)
    //       </h4>
    //     </div>
    //     <div className="pb-[2vw]">
    //       <Button
    //         name="Shop Now"
    //         buttonStyle="uppercase font-semibold tracking-[2px] border-1 rounded-[50px] px-[3vw] py-[1vw] "
    //       />
    //     </div>
    //   </div>
    //   <div className="w-[60%] h-full ">
    //     <img
    //       src="/homePage/About us/our-vision.jpg"
    //       alt=""
    //       className="w-full h-full object-cover bg-center"
    //     />
    //   </div>
    // </div>
  );
};

export default AbSection2;
