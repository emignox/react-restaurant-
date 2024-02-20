import { IoMdMail } from "react-icons/io";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-custom-color-white h-auto">
      <h1 className=" font-black text-center text-xl leading-7 text-indigo-950   flex items-center justify-center   lg:text-4xl">
        Subscribe to our newsletter <IoMdMail />
      </h1>
      <FaArrowAltCircleDown className="  text-center  mx-auto text-4xl my-3 text-indigo-950" />

      <div className=" flex justify-center items-center  ">
        <input
          className=" bg-white h-12 rounded-lg  text-indigo-950 font-semibold my-10"
          type="text"
          id=""
        />
        <button className=" bg-custom-color text-custom-color-white h-12 rounded-xl w-32 ">
          Subscribe
        </button>
      </div>
      <h1 className="  text-indigo-950 font-black text-2xl  text-center  ">
        {" "}
        contacts
      </h1>
      <section className=" flex  bg-custom-color-light justify-center items-center mx-auto rounded-3xl h-20 w-1/5 my-3">
        <FaInstagramSquare className="text-4xl text-indigo-950 mx-2" />
        <FaFacebookSquare className="text-4xl text-indigo-950 mx-2" />
        <FaTwitterSquare className="text-4xl text-indigo-950 mx-2" />
      </section>
      <p className="text-center text-indigo-950">
        © {new Date().getFullYear()} emanuele front creator Fodo restaurant.
        Artist right.
      </p>
    </footer>
  );
}

export default Footer;
