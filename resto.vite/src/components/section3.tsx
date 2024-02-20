import click from "/click.png";
import drone from "/drone.png";

function section3() {
  return (
    <>
      <section className="lg:mx-20">
        <div className=" w-2/2 flex flex-col mt-16  justify-between items-center lg:flex-row ">
          <img
            className="w-1/2 menu-hamb rounded-2xl  lg:w-1/3"
            src={click}
            alt=""
          />
          <div className=" flex flex-col items-center justify-center text-start space-y-5 ">
            <h1 className="mx-2 font-black text-center text-xl leading-7 text-indigo-950     lg:text-6xl">
              Click and in <br /> 5 minutes is ready!!{" "}
            </h1>

            <p className=" w-1/2 text-indigo-950 text-xs   lg:text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              accusantium suscipit consectetur incidunt optio dolorem corporis
              obcaecati.
            </p>
            <button className=" border-2 border-gray-800 text-lg text-indigo-950  font-bold inline w-44    rounded-full">
              see how it works
            </button>
          </div>
        </div>
      </section>
      <section className="lg:mx-20 py-52">
        <div className=" w-2/2 flex flex-col mt-16  justify-between items-center  lg:flex-row-reverse">
          <img
            className="w-1/2 gradient-top rounded-2xl  lg:w-1/3"
            src={drone}
            alt=""
          />
          <div className=" flex flex-col items-center justify-center text-start space-y-5 ">
            <h1 className="mx-2 font-black text-center text-xl leading-7 text-indigo-950     lg:text-6xl">
              Drone delivery <br /> 10 times faster!!{" "}
            </h1>

            <p className=" w-1/2 text-indigo-950 text-xs   lg:text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              accusantium suscipit consectetur incidunt optio dolorem corporis
              obcaecati.
            </p>
            <button className=" border-2 border-gray-800 text-lg text-indigo-950  font-bold inline w-44    rounded-full">
              see how it works
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default section3;
