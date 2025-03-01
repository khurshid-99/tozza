const Footer = () => {
  return (
    <>
      <div
        className="w-full lg:h-[50vh] px-[7vw] lg:px-[13vw] overflow-x-hidden "
        style={{
          backgroundImage: "url('./homePage/footer/footer back.jpg')",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-[4vw] ">
          {/* logo section */}
          <div className="w-full lg:w-[40%] h-full text-[#7F9CFF] ">
            <img
              src="/homePage/header & footer logo/logo footer.png"
              alt=""
              className="lg:w-[13vw] lg:mb-[3vw] "
            />
            <p className="lg:text-[1vw] lg:leading-[2.2rem] ">
              Lorem Ipsum is dummy text of the printing <br />
              and typesetting industry. Lorem Ipsum has been the{" "}
              <br className="hidden lg:inline-block" />
              industry&#39; s standard dummy text ever...
            </p>
          </div>

          <div className="w-[60%] h-full flex flex-col lg:flex-row lg:justify-between text-[#E7E7E4] ">
            {/* quick link */}
            <div className="Quick-link-section">
              <div>
                <h2 className="text-[6vw] lg:text-[1.1vw] font-semibold mb-3 mt-5 lg:mt-0 ">Quick Link</h2>
                <img src="/homePage/footer/underline.png" alt="" />
              </div>
              {/* Quick link items */}
              <div className="mt-7">
                <ul className="flex flex-col gap-y-6">
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />
                    <h5 className="text-lg font-light ">
                      Today&#39; s Specials
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Chicken</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Fish</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Mutton</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Ready to Cook</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />
                    <h5 className="text-lg font-light ">Fruits & Vegetables</h5>
                  </li>
                </ul>
              </div>
            </div>
            {/* our product  */}
            <div className="Our-product-section">
              <div>
                <h2 className="text-[6vw] lg:text-[1.1vw] font-semibold mb-3 mt-5 lg:mt-0 ">
                  Our Product
                </h2>
                <img src="/homePage/footer/underline.png" alt="" />
              </div>
              {/* our product items */}
              <div className="mt-7">
                <ul className="flex flex-col gap-y-6">
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />
                    <h5 className="text-lg font-light ">
                      Chicken Curry Cut Small
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Lean Goat Cutty Cut</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Chicken Drumstick</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">
                      Fresh chopped vegetables
                    </h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />{" "}
                    <h5 className="text-lg font-light ">Fresh-Fish-slices</h5>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src="/homePage/footer/arrow.png" alt="" />
                    <h5 className="text-lg font-light ">
                      Assorted-Sppices-eggs
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            {/* social link */}
            <div className="Social-link">
              <div>
                <h2 className="text-[6vw] lg:text-[1.1vw] font-semibold mb-3 mt-5 lg:mt-0 ">Social Link</h2>
                <img src="/homePage/footer/underline.png" alt="" />
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-x-2 py-4 bg-deep-navyblue text-[#7F9CFF] ">
        <h5>Copyright&copy; 2021</h5>
        <img src="/homePage/footer/copyright div.png" alt="" />
        <h5>tazzartc.com All Right Reserved</h5>
      </div>
    </>
  );
};

export default Footer;
