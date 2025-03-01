import Section1 from "./heroitems/Section1";
import Section2 from "./heroitems/Section2";
import Section3 from "./heroitems/Section3";

const HeroSection = () => {
  return (
    <div className="font-poppins w-full h-[35vh] lg:h-[75vh] ">
      <div className="w-full hidden lg:inline-block bg-[yellow] ">
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
};

export default HeroSection;
