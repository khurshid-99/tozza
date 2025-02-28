import { Button } from "../templates";

const Discover = () => {
  return (
    <div
      className="w-full h-[58vh] px-[13vw] py-[4vw] font-poppins "
      style={{
        backgroundImage: "url('./homePage/CTA/cta back.png')",
        objectFit: "cover", objectPosition: "top"
      }}
    >
      <h4 className="text-[1.2vw]">Discover the Tazzartc</h4>
      <h1 className="text-[3.3vw] font-semibold ">Tazza RTC</h1>
      <h2 className="text-[2vw] font-light mt-[1vw]  ">
        Daily essentials, delivered to <br />
        your doorstep.
      </h2>
      <div className="mt-[2.5vw]  ">
        <Button
          name="Shop Now"
          buttonStyle="capitalize tracking-[2px] border-1 rounded-[50px] text-[1.2vw] px-[3.5vw] py-[1vw] bg-secondary text-primary mr-[1vw] "
        />
        <Button
          name="Discover"
          buttonStyle="capitalize font-medium text-[1.2vw] tracking-[2px] border-1 rounded-[50px] px-[3.5vw] py-[1vw] "
        />
      </div>
    </div>
  );
};

export default Discover;
