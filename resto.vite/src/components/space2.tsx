import Svg_uno from "./svg1";
import Svd_due from "./svg2";

function space_due() {
    return (
        <>
            <div className="menu-hamb flex flex-col h-screen text-lg items-center justify-start">
                <h1 className="color text-8xl p-0 m-0 text-center w-full font-black tracking-widest sm:w-full sm:text-9xl lg:text-9xl ">
                    Burger
                </h1>  
                 <h2 className=" absolute text-indigo-950 mt-32  top-52 font-extrabold text-3xl z-10 whitespace-nowrap //  sm:absolute sm:top-1/3 // lg:absolute  lg:top-2/4  ">
                    Our Premium Food{" "}
                </h2>

             <div className="sm:flex sm:row-auto">
                <Svg_uno />
                <Svd_due />


                </div>
            </div>
        </>
    );
}
export default space_due;