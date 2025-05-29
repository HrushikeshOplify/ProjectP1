import Image from "next/image";
import LoginButton from "../LoginButton";
import "./Hero.css";


const Hero = () => {
  return (
    <section  className="hero-section w-screen bg-indigo-100 flex justify-center items-center ">
      <div className="flex flex-col gap-3 mt-8 md:w-1/2  py-4 px-5 md:px-8">
        <div className="">
          <h2 className="text-md mb-6 md:text-lg text-gray-700"><span className="text-[#6fe1e9] text-lg font-extrabold"><ion-icon name="rocket-outline"></ion-icon></span> Kick start your project with</h2>

          <h1 className="text-3xl text-left text-gray-800  font-semibold md:text-4xl">
            Enhance{" "}
            <span className="text-indigo-700">Developer's Productivity</span>{" "}
            with a MatDash
          </h1>
        </div>

        <div>
          <h2 className=" flex text-sm md:text-2xl text-gray-500 " >
            MatDash comes with light & dark color skins, well designed
            dashboards, applications and pages.
          </h2>
        </div>

        {/* Button */}
        <div className="w-full gap-2  ">
          <LoginButton />
          <div className="mt-2 ">
            <button className="border border-indigo-700 text-indigo-700 text:text-indigo-700 hover:text-white hover:bg-indigo-700 w-full py-2 rounded-md md:hidden">
              Live Preview
            </button>
          </div>
        </div>
      </div>

      <div className="hidden  md:flex md:w-1/2">
        <div className="flex flex-col h-full">
          <div className="scroller h-full">
            <div className="banner">
              <Image
              src="/bannerimg1.png"
              width={300}
              height={200}
              alt="data"
              />
            </div>

            {/* <div className="banner">
              <Image
              src="/bannerimg1.png"
              width={300}
              height={200}
              alt="data"
              />
            </div>  */}
          </div>
        </div>


        <div>
          <Image
          src="/bannerimg2.png"
          width={300}
          height={200}
          alt="data"
          />

          {/* <Image
          src="/bannerimg2.png"
          width={300}
          height={200}
          alt="data"
          /> */}
        </div>
      </div>

    </section>
  );
};

export default Hero;
