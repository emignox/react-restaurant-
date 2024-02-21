import click from "/click.png";
import drone from "/drone.png";

function Section3() {
  return (
    <>
      <section className="lg:mx-20 ">
        <div className=" w-2/2 flex flex-col mt-16 mb-16  justify-between items-center lg:flex-row ">
          <img
            className="w-1/2 menu-hamb rounded-2xl  lg:w-1/3 shadow-xl"
            src={click}
            alt=""
          />
          <div className=" flex flex-col  lg:flex lg:flex-col lg:items-end  items-center  justify-center  space-y-5 my-10 ">
            <h1 className="mx-2 font-black  lg:text-end text-center text-xl leading-7 text-indigo-950  w-full    lg:text-6xl">
              Click and in few minutes <br /> your order is ready!!{" "}
            </h1>

            <p className=" w-1/2 text-indigo-950 text-xs     ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae minus iure facere accusantium alias quam dolorem,
              beatae nam illum sapiente vitae, tempore quisquam est eligendi,
              magnam aliquid voluptatum. Obcaecati, quos!
            </p>
            <button className=" border-2 border-gray-800 text-lg text-indigo-950  font-bold inline w-44  hover:bg-indigo-950 hover:text-custom-color-white transition duration-500   rounded-full">
              see how it works
            </button>
          </div>
        </div>
      </section>
      <section className="lg:mx-20 py-32 ">
        <div className=" w-2/2 flex flex-col mt-5  justify-between items-center  lg:flex-row-reverse">
          <img
            className="w-1/2 gradient-top rounded-2xl  lg:w-1/3   shadow-top"
            src={drone}
            alt=""
          />
          <div className=" flex flex-col  lg:flex lg:flex-col lg:items-start  items-center  justify-center  space-y-5  my-10 ">
            <h1 className="mx-2 font-black text-center lg:text-start  text-xl leading-7 text-indigo-950     lg:text-6xl">
              Drone delivery <br /> 10 times faster!!{" "}
            </h1>

            <p className=" w-1/2 text-indigo-950 text-xs   lg:text">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              expedita nobis at ipsa rem unde mollitia qui cupiditate suscipit
              fuga. Voluptatibus nisi magnam maiores doloremque neque fugiat
              mollitia porro velit.
            </p>
            <button className=" border-2 border-gray-800 text-lg text-indigo-950    font-bold inline w-44  hover:bg-indigo-950 hover:text-custom-color-white transition duration-500   rounded-full">
              Read more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section3;
