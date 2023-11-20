function Hero() {
  return (
    <div className="  flex   h-80  flex-col">
      <h1 className="   font-black   h-60    text-left  w-auto  leading-tight text-indigo-950 text-5xl p-5">
        {" "}
        GREAT <br /> <span className=" text-3xl font-semibold">
          FAST
        </span> FOOD <br /> SHOP
      </h1>
      <svg
        className=" absolute   top-40  left-3 p-3"
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="39"
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
      <div className=" absolute  left-3/4 ">
        <h2 className=" text-indigo-950  text-xs font-extrabold absolute pt-8 tracking-widest ">
          Mexican <br />
          Burger
        </h2>
        <h3 className=" price text-xs font-extrabold absolute  top-20   mt tracking-widest ">
          $19.99
        </h3>
        <button className=" btn text-xs absolute  mt-3  -left-5   w-24 top-24 p-2 rounded-full">
          <img className="w-3 inline" src="./img/carrello.png" alt="" />
          add to cart
        </button>
      </div>
      <img
        className="hamburger absolute   z-30   le top-36"
        src="./img/hamburger.png"
        alt=""
      />
      <svg
        className="   w-20 absolute  -right-2 top-72 "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFDDCE"
          d="M44.4,-14.6C52.8,11.5,51.6,40.5,36.6,51.8C21.5,63.1,-7.5,56.6,-29.3,40.7C-51.1,24.7,-65.7,-0.7,-59.7,-23.6C-53.6,-46.5,-26.8,-66.8,-4.4,-65.4C18,-64,36,-40.7,44.4,-14.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <img
        className="h-16  absolute  top-72 -right-1"
        src="./img/pizza.png"
        alt=""
      />
    </div>
  );
}
export default Hero;
