import { Button } from "../../templates";

const Section2 = () => {
  return (
    <div
      className="w-full h-[30vh] lg:h-[50vh] relative bg-cover bg-[45%] lg:bg-center px-[7vw] flex flex-col justify-center font-poppins text-primary "
      style={{ backgroundImage: "url('./homePage/About us/banner.jpg')" }}
    >
      <h1 className="text-[10vw] lg:text-[3vw] font-semibold ">About tazza</h1>
      <p className="text-[1rem] lg:text-cxl my-4 lg:my-6 ">
        Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Porro,
        a!
      </p>
      <div>
        <Button
          name="SHOP NOW"
          buttonStyle="uppercase inline-block px-[5vw] py-[3vw] lg:px-[2.8vw] lg:py-[1.2vw] bg-deep-slate rounded-[50px] mt-6  "
        />
      </div>
    </div>
  );
};

export default Section2;
