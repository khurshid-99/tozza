import { Button } from "../templates";

const NaturalHealthy = () => {
  return (
    <div className="w-full h-[60vh] px-[7vw] ">
      <div
        className="w-full h-[60vh] object-cover bg-no-repeat pl-[5vw] py-[5vw]"
        style={{
          backgroundImage: "url('./homePage/About us/natural healthy.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h3 className="uppercase font-medium text-golden-yellow tracking-[1px] text-[.95vw] mb-[.5vw] ">
          This Seriving To Bring Back The
        </h3>
        <h1 className="capitalize text-[3.2vw] font-semibold text-primary ">
          Natural & Healty
        </h1>
        <h4 className="text-[1.4vw] tracking-[.5px] text-primary mt-[1.1vw] mb-[2.4vw] ">
          Food is not only for Business but also <br /> it is Our Solicitation.
        </h4>
        <Button
          name="Shop Now"
          buttonStyle="uppercase font-semibold tracking-[2px] bg-golden-yellow rounded-[50px] px-[3vw] py-[1vw] "
        />
      </div>
    </div>
  );
};

export default NaturalHealthy;
