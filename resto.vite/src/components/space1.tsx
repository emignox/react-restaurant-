

function space_one() {
    return (
      <div className="flex h-52 flex-col sm:h-96">
        <h1 className=  " mx-2 absolute top-20 font-black  text-left w-auto   text-2xl  leading-tight  text-indigo-950 sm:font-black sm:h-60 sm:text-left sm:w-auto sm:leading-tight sm:text-indigo-950 sm:text-5xl sm:p-5 lg:text-8xl">
          {" "}
          GREAT <br /> <span className=" text-base italic font-semibold sm:text-3xl sm:italic sm:font-black  lg:text-6xl lg:font-black">
            FAST
          </span> FOOD <br /> SHOP
        </h1>
        <svg
          className=" mx-2  w-9 absolute top-32 h-5   sm:absolute  sm:w-20 sm:left-5 sm:top-52  lg:w-32 lg:top-72"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 268 39"
          fill="none"
        >
          <path
            d="M263.266 16.0673C63.4969 -11.0228 7.60057 17.3236 4.62349 34.883"
            stroke="#FFA876"
            stroke-width="8"
            stroke-linecap="round"
          />
        </svg>
        <div className="sm:d-flex sm:justify-content-center sm:align-items-center ">
          <img
            className="hamburger  absolute w-64 top-  left-16  sm:absolute sm:left-28 z-30 sm:top-10  sm:w-2/3  sm:z-30 lg:w-auto lg:top-0  lg:left-80  "
            src="./img/hamburger.png"
            alt=""
          />
        </div>
      </div>
    );
  }
  export default space_one;