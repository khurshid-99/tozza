import { Button } from "../templates";

const Discover = () => {
  return (
    <div
      className="w-full h-[30vh] lg:h-[50vh] xl:h-[58vh] px-[7vw] lg:px-[13vw] py-[4vw] font-poppins bg-[center_right_-120vw] lg:bg-[center_right_-15vw] xl:bg-[center] bg-no-repeat "
      style={{
        backgroundImage: "url('./homePage/CTA/cta back.png')",
        objectFit: "cover",
      }}
    >
      <h4 className="text-[4vw] lg:text-[3vw] xl:text-[1.2vw]">Discover the Tazzartc</h4>
      <h1 className="text-[7vw] lg:text-[6vw] xl:text-[3.3vw] font-semibold ">Tazza RTC</h1>
      <h2 className="text-[4vw] xl:text-[2vw] font-light mt-[3vw] lg:mt-[2vw] xl:mt-[1vw]  ">
        Daily essentials, delivered to <br />
        your doorstep.
      </h2>
      <div className="mt-[5vw] lg:mt-[2.5vw]  ">
        <Button
          name="Shop Now"
          buttonStyle="capitalize tracking-[2px] border-1 rounded-[50px] text-[4vw] px-4 py-1.5 lg:text-[1.2vw] lg:px-[3.5vw] lg:py-[1vw] bg-secondary text-primary mr-[1vw] "
        />
        <Button
          name="Discover"
          buttonStyle="capitalize tracking-[2px] border-1 rounded-[50px] text-[4vw] px-4 py-1.5 lg:text-[1.2vw] lg:px-[3.5vw] lg:py-[1vw] text-secondary mr-[1vw]"
        />
      </div>
    </div>
  );
};

export default Discover;
