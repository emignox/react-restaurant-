function mexican_burger() {
  return (
    <>
      <div className=" absolute top-12  left-3/4    sm:absolute sm:top-20  sm:left-3/4  ">
        <h2 className=" text-indigo-950  text-xs font-extrabold absolute pt-8 tracking-widest  sm:text-indigo-950  sm:text-3xl sm:font-extrabold sm:absolute sm:pt-8 sm:tracking-widest  lg:text-4xl ">
          Mexican <br />
          Burger
        </h2>
        <h3 className=" price text-xs font-extrabold absolute  top-20    tracking-widest  sm:text-2xl sm:font-extrabold sm:absolute  sm:top-28   sm:tracking-widest lg:mt-32 lg:text-4xl  ">
          $19.99
        </h3>
        <button className=" btn text-xs absolute  mt-3  -left-5   w-24 top-24 p-2 rounded-full    btn sm:text-xss sm:absolute  sm:mt-3  sm:-left-2   sm:w-24 sm:top-40 sm:p-2 sm:rounded-full">
          <img className="w-3 inline" src="./img/carrello.png" alt="" />
          add to cart
        </button>
      </div>
    </>
  );
}
export default mexican_burger;
