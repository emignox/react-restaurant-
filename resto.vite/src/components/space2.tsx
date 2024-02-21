import hot from "/hot.png";
import roll from "/roll.png";
import pizza from "/pizza3.png";

const vectors = [
  {
    title: " mexican Roll",
    price: "$19.99",
    img: roll,
  },
  {
    title: " Hot Dog",
    price: "$18.99",
    img: hot,
  },
  {
    title: " Pizza",
    price: "$17.99",
    img: pizza,
  },
];

function Section2() {
  return (
    <div
      className={
        "    my-44   bg-custom-color h-auto text-center p-0  lg:mx-0  lg:rounded-3xl rounded-xl    "
      }
    >
      <svg
        style={{ transform: "translateY(-1px)" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff4ed"
          fill-opacity="1"
          d="M0,288L34.3,288C68.6,288,137,288,206,288C274.3,288,343,288,411,266.7C480,245,549,203,617,192C685.7,181,754,203,823,218.7C891.4,235,960,245,1029,213.3C1097.1,181,1166,107,1234,96C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h1 className=" burger-text text-8xl lg:text-9xl font-black"> Burger</h1>{" "}
      <h1 className="  text-indigo-950 text-xl  font-black  lg:text-4xl">
        Our premier Food
      </h1>
      <div className="flex  flex-row  ">
        {vectors.map((vector, index) => (
          <div
            className="flex flex-col items-center justify-center my-6 w-full "
            key={index}
          >
            <img
              className=" w-3/5 z-10 bg-custom-color-dark rounded-full shadow-2xl hover:scale-105 transition duration-500 "
              src={vector.img}
              alt={vector.title}
            />
            <h2 className="text-indigo-950 text-base font-black lg:text">
              {vector.title}
            </h2>
            <p className="text-indigo-950 text-base font-bold">
              {vector.price}
            </p>
          </div>
        ))}
      </div>
      <svg
        style={{ transform: "translateY(1px)" }}
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff4ed"
          fill-opacity="1"
          d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,138.7C560,117,640,107,720,117.3C800,128,880,160,960,149.3C1040,139,1120,85,1200,64C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default Section2;
