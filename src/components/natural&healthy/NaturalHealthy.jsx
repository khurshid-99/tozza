import { Button } from "../templates";

const NaturalHealthy = () => {
  return (
    <div className="w-full h-[60vh] px-[7vw]">
      <div
        className="w-full h-full object-cover object-center bg-no-repeat pl-[5vw] py-[5vw] "
        style={{
          backgroundImage: "url('./homePage/About us/natural healthy.jpg')",
        }}
      >
        <h3 className="uppercase font-medium text-golden-yellow tracking-[1px] text-[.95vw]">This Seriving To Bring Back The</h3>
        <h1 className="capitalize text-[3.2vw] font-semibold text-primary ">Natural & Healty</h1>
        <h4 className="">Food is not only for Business but also it is Our Solicitation.</h4>
        <Button
          name="Shop Now"
          buttonStyle="uppercase font-semibold tracking-[2px] bg-golden-yellow rounded-[50px] px-[3vw] py-[1vw] "
        />
      </div>
    </div>
  );
};

export default NaturalHealthy;
