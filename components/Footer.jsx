import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-[#635bff] w-screen h-screen flex flex-col  ">
      <div className="w-screen flex flex-col justify-center items-center max-w-7xl my-16 sm:flex-row sm:m-auto ">
        
        <div className="text-center sm:w-1/2 ">

          <div className="w-full sm:text-left ">
            <h1 className="flex flex-wrap text-3xl sm:text-5xl font-semibold text-white ">
              Build your app with our highly customizable Boostrap based
              Dashboard
            </h1>
          </div>

          <div className="sm:flex sm:text-left">

            <div className="px-5">
              <button className="bg-white text-[#635bff] w-full sm:w-fit sm:px-5 sm:py-2 rounded-md mt-3 p-2">
                Login
              </button>
            </div>

            <div className="px-5">
              <button className="bg-[#635bff] border border-white text-white w-full sm:w-fit sm:px-5 sm:py-2  mt-3 rounded-md p-2">
                Register
              </button>
            </div>

          </div>

        </div>

        <div className="mt-5 sm:w-1/2 sm:text-center" >
          <Image
            src="/checking-email.png"
            alt="Emial-checking"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
