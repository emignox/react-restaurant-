function Premium() {
  return (
    <div className="menu-hamb  flex flex-col h-screen   text-lg">
      <h1 className=" color text-8xl p-0 m-0  text-center w-full font-black tracking-widest   ">
        Burger
      </h1>
      <h2 className="text-indigo-950   absolute top-96 mt-32 left-14  font-extrabold text-3xl z-10 whitespace-nowrap ">
        Our Premium Food{" "}
      </h2>
      <svg
        className="absolute w-72 left-9 mt-40"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EBD4C5"
          d="M51.8,-27C65.6,-5.9,74.4,21.1,64.9,34.9C55.4,48.8,27.7,49.6,6.2,46C-15.4,42.4,-30.7,34.5,-37.9,21.9C-45.2,9.4,-44.2,-7.8,-36.6,-25.3C-28.9,-42.8,-14.4,-60.7,2.3,-62C19,-63.3,37.9,-48.1,51.8,-27Z"
          transform="translate(100 100)"
        />
      </svg>
      <img
        className=" relative top-24 left-24  w-48"
        src="./img/hot.png"
        alt=""
      />
      <h2 className=" text-indigo-950  mr-5 text-end   left-72  font-extrabold tracking-widest text-xs">
        Hot dog <br /> <span className="">$12.99</span>
      </h2>
      <svg
        className="absolute w-72  left-9  mt-96"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EBD4C5"
          d="M51.8,-27C65.6,-5.9,74.4,21.1,64.9,34.9C55.4,48.8,27.7,49.6,6.2,46C-15.4,42.4,-30.7,34.5,-37.9,21.9C-45.2,9.4,-44.2,-7.8,-36.6,-25.3C-28.9,-42.8,-14.4,-60.7,2.3,-62C19,-63.3,37.9,-48.1,51.8,-27Z"
          transform="translate(100 100)"
        />
      </svg>
      <img
        className=" relative top-24 left-24  w-48"
        src="./img/roll.png"
        alt=""
      />
      <h2 className=" text-indigo-950    font-extrabold tracking-widest text-xs">
        French Rolls <br /> <span className="">$12.99</span>
      </h2>

      <svg
        className="absolute w-72 top-3/4  left-9  mt-80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EBD4C5"
          d="M51.8,-27C65.6,-5.9,74.4,21.1,64.9,34.9C55.4,48.8,27.7,49.6,6.2,46C-15.4,42.4,-30.7,34.5,-37.9,21.9C-45.2,9.4,-44.2,-7.8,-36.6,-25.3C-28.9,-42.8,-14.4,-60.7,2.3,-62C19,-63.3,37.9,-48.1,51.8,-27Z"
          transform="translate(100 100)"
        />
      </svg>
      <img className="  w-60  mt-20 ml-24 " src="./img/pizza3.png" alt="" />
      <h2 className=" text-indigo-950   mr-5 text-end relative bottom-40   font-extrabold tracking-widest text-xs">
        Italian Pizza <br /> <span className="">$12.99</span>
      </h2>
    </div>
  );
}
export default Premium;
