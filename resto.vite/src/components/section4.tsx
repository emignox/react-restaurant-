import { IoStarSharp } from "react-icons/io5";
import girl from "/girl.png";
const sections = [
  {
    title: "we are the premium and yummy, fast food in usa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laborum doloribus excepturi aliquid architecto.",
    review: "4.8 review",
    stars: 4,
  },
];
function section4() {
  return (
    <>
      <section className="bg-custom-color-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff4ed"
            fill-opacity="1"
            d="M0,192L30,160C60,128,120,64,180,42.7C240,21,300,43,360,58.7C420,75,480,85,540,117.3C600,149,660,203,720,213.3C780,224,840,192,900,160C960,128,1020,96,1080,112C1140,128,1200,192,1260,208C1320,224,1380,192,1410,176L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <h1 className="text-center text-3xl lg:text-5xl text-indigo-950 font-black pb-10">
          The best food in New York!! 🌭🍔🍟
        </h1>
        {sections.map((section, index) => (
          <div className="  flex flex-row  " key={index}>
            <div className="flex flex-col  items-center justify-between   text-center mx-auto    ">
              <h1 className="mx-2 font-black text-center text-xl leading-7 text-indigo-950 lg:text-2xl">
                {section.title}
              </h1>
              <p className=" text-center text-indigo-950 my-5 w-1/2 font-semibold">
                {section.description}
              </p>
              <div className="  flex flex-col items-center justify-start rounded-3xl p-2 text-start bg-white w-1/2  ">
                <p className="p-5 rounded-3xl text-xl  font-black m  text-indigo-950">
                  {section.review}
                  <hr />
                </p>
                <p className="flex text-custom-color text-4xl  ">
                  {Array(section.stars)
                    .fill(0)
                    .map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                </p>
              </div>
            </div>
          </div>
        ))}
        <img className="w-1/6 rounded-full mx-auto " src={girl} alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff4ed"
            fill-opacity="1"
            d="M0,160L30,176C60,192,120,224,180,213.3C240,203,300,149,360,106.7C420,64,480,32,540,37.3C600,43,660,85,720,117.3C780,149,840,171,900,170.7C960,171,1020,149,1080,133.3C1140,117,1200,107,1260,112C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}
export default section4;
