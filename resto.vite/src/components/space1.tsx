import hamburger from "/hamburger.png";
import carrello from "/carrello.png";

function space_one() {
  return (
    <>
      <img
        className=" absolute top-6 left-16  z-10 w-2/3 hamburger    sm:absolute sm:top-5 sm:left-32   md:absolute md:top-5 md:left-32 lg:absolute lg:top-20 lg:left-1/4 lg:w-1/2 "
        src={hamburger}
        alt=""
      />
      <div className="flex flex-row justify-between items-center px-5 lg:p-20  mt-12  ">
        <h1 className="mx-2 font-black text-left text-2xl leading-7 text-indigo-950  md:text-7xl     lg:text-8xl">
          GREAT <br />
          <span className="text-xl italic font-semibold sm:text-3xl sm:italic sm:font-black lg:text-6xl   lg:font-bolder  ">
            FAST
          </span>
          FOOD <br /> SHOP
        </h1>{" "}
        <div className="flex flex-col text-center items-center justify-center space-y-2  w-1/3 m-0 p-0">
          <h2 className="text-indigo-950 text-xs font-extrabold tracking-widest sm:text-indigo-950 sm:text-3xl sm:font-extrabold lg:text-2xl">
            Mexican <br />
            Burger
          </h2>
          <h3 className="price text-xs font-extrabold tracking-widest sm:text-2xl sm:font-extrabold lg:mt-32 lg:text-4xl">
            $19.99
          </h3>
          <button className="btn   rounded-full sm:mt-3 sm:-left-2 sm:w-24 sm:top-40 sm:p-2 sm:rounded-full">
            <img className="w-3 inline" src={carrello} alt="" />
            add to cart
          </button>
        </div>
      </div>
    </>
  );
}
export default space_one;
