import { useState } from "react";
import { InstagramFeedCard } from "../templates";

const InstagramFeed = () => {
  const [instagramCard, setInstagramCard] = useState([
    { src: "/homePage/Instagram feed/insta_1.png" },
    { src: "/homePage/Instagram feed/insta_2.png" },
    { src: "/homePage/Instagram feed/insta_3.png" },
    { src: "/homePage/Instagram feed/insta_4.png" },
  ]);

  return (
    <div className="w-full lg:h-[50vh] xl:h-[70vh] px-[7vw] py-[4vw] font-poppins ">
      <div className="w-full bg-primary flex flex-col items-center justify-center ">
        <img src="/homePage/Heading logo brandig icon/brand icon.png" alt="" />
        <h1 className="text-[5vw] lg:text-[2vw] capitalize font-semibold ">
          Instagram Feed
        </h1>
        <p className="text-[#898989] text-[1.2rem] mt-[1.8vw] text-center hidden lg:inline-block ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis
          molestiae quibusdam natus doloremque laborum ut rerum ipsa.
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-[1.6vw] py-[4vw] ">
        {instagramCard.map((card, index) => (
          <InstagramFeedCard
            key={index}
            img={card.src}
            divStyle="w-[25vw] h-[17vw] lg:w-[17vw] lg:h-[13vw] "
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
