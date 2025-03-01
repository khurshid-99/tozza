import AbSection1 from "./aboutUsItems/AbSection1";
import AbSection2 from "./aboutUsItems/AbSection2";
import AbSection3 from "./aboutUsItems/AbSection3";


const AboutUs = () => {
  return (
    <div className="relative w-full min-h-[70vh] xl:min-h-screen px-[7vw] py-[5vw] lg:py-[3.5vw] overflow-x-hidden ">
        <AbSection1 />
        <AbSection2 />
        <AbSection3 />
    </div>
  );
};

export default AboutUs;
