const NavMeddile = () => {
  const delicious = "delicious";

  return (
    <div>
      <div className="w-[65vw] lg:w-[35vw] xl:w-[29vw] ml-0  xl:ml-[15vw] flex items-center justify-between bg-primary border-1 border-soft-gray rounded-[50px] py-1.5 pl-5 xl:pl-8 pr-2  xl:py-2 ">
        <input
          type="text"
          placeholder={`Search for any ${delicious} product`}
          id="search"
          className="w-full outline-none relative placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-cxl  "
        />
        {/* mobile svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="w-[2.9rem] h-[2.6rem] bg-sky-blue rounded-full p-2.5 inline-block lg:hidden "
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>

        {/* web svg search */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="lg:w-[4vw] lg:h-[3.7vw] xl:w-[2.9vw] xl:h-[2.7vw] bg-sky-blue rounded-full p-2 xl:p-3 hidden lg:inline-block "
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NavMeddile;
