import { useState } from "react";
import { Button } from "../../templates";

const Section1 = () => {
  const [Products, setProducts] = useState([
    {
      src: "homePage/product/today deals .png",
      name: "Today's Deals",
    },
    {
      src: "homePage/product/Chicken.png",
      name: "Chicken",
    },
    {
      src: "homePage/product/Fish.png",
      name: "Fish",
    },
    {
      src: "homePage/product/Mutton.png",
      name: "Mutton",
    },
    {
      src: "homePage/product/eggs.png",
      name: "Eggs",
    },
    {
      src: "homePage/product/Fruits.png",
      name: "Furits",
    },
    {
      src: "homePage/product/vegetables.png",
      name: "Vegetables",
    },
    {
      src: "homePage/product/Special product.png",
      name: "Special Product",
    },
  ]);

  return (
    <div className="w-full bg-soft-gray px-[7vw] pt-[4vh] pb-[2vh] xl:h-[17vh] ">
      <ul className="w-full flex items-center justify-between ">
        {Products.map((product) => (
          <li
            key={product.name}
            className="flex flex-col items-center justify-center "
          >
            <img src={product.src} alt="" className="w-[4.5vw] xl:w-[4vw] mb-1 " />
            <h4 className="text-[1.6vw] xl:text-[1.1vw] ">
              {product.name}
            </h4>
          </li>
        ))}
        <Button
          name="More"
          buttonStyle="bg-deep-navyblue text-primary text-[1.11vw] xl:text-[.7vw] w-[5vw] h-[5vw] xl:w-[3vw] xl:h-[3vw]  px-2 py-2  rounded-full "
        />
      </ul>
    </div>
  );
};

export default Section1;
