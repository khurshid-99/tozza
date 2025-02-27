const Section3 = () => {
  return (
    <div className="font-poppins w-full px-[7vw] py-[1.5vw] bg-ice-blue ">
      <div className="w-full flex items-center justify-between ">
        <div className="">
          <a href="">Home</a>
          <span className="inline-block mx-2 font-medium ">/</span>
          <a href="" className="text-[#8E8B87]">
            About Us
          </a>
        </div>
        <div className=" flex items-center text-[#8E8B87] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[5vw] h-[5vw] lg:w-[1vw] lg:h-[1vw] font-extralight mr-2 "
          >
            <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
          </svg>
          <a href="" className="text-nowrap">
            Previous page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
