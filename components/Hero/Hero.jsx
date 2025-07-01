import Image from "next/image";
import LoginButton from "../LoginButton";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section w-screen bg-indigo-100 flex justify-center items-center">
      <div className="max-w-[1440px] mx-auto flex px-5 sm:px-10">
        <div className="flex flex-col gap-3   mt-8 lg:w-1/2   py-4 px-5 md:px-8">

          <div className="gap-10">
            <div className="">
              <h2 className="text-md mb-6 md:text-lg text-gray-700">
                <span className="text-[#6fe1e9] text-lg font-extrabold">
                  <ion-icon name="rocket-outline"></ion-icon>
                </span>{" "}
                Kick start your project with
              </h2>
            </div>

            <div className="sm:mb-6">
              <h1 className="text-3xl text-left text-gray-700  font-semibold md:text-4xl">
                Bring structure to factory chaos-from inventory to invoicing,{" "}
                <span className="text-indigo-700">
                  All in one streamlined system.
                </span>
              </h1>
            </div>

            <div className="sm:mb-6">
              <h2 className=" flex text-md sm:mb-6 md:text-2xl text-gray-500 ">
                Built for MSMEs — simplify your inventory, production,
                operations, and billing in one easy system.
              </h2>

              <h2 className=" flex text-md md:text-2xl text-gray-500 ">
                Used by businesses across trading,importing, and manufacturing
                to save time and bring clarity to every process.
              </h2>
            </div>

            {/* Button */}
            <div className="">
              <LoginButton />
              {/* <div className="mt-2 ">
              <button className="border border-indigo-700 text-indigo-700 text:text-indigo-700 hover:text-white hover:bg-indigo-700 w-full py-2 rounded-md md:hidden">
                Live Preview
              </button>
            </div> */}
            </div>
          </div>
        </div>

        <div className="hidden  lg:flex md:w-1/2">
          <div className="flex flex-col h-full">
            <div className="scroll-wrapper">
              <div className="scroll-content">
                <Image
                  src="/bannerimg1.png"
                  width={300}
                  height={200}
                  alt="data"
                />
                <Image
                  src="/bannerimg1.png"
                  width={300}
                  height={200}
                  alt="data"
                />
              </div>
            </div>
          </div>

          <div className="scroll-wrapper">
            <div className="scroll-content2">
              <Image
                src="/bannerimg2.png"
                width={300}
                height={200}
                alt="data"
              />

              <Image
                src="/bannerimg2.png"
                width={300}
                height={200}
                alt="data"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
