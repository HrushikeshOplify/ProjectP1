import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-[#635bff] w-full px-5 sm:px-10 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-white space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Need something tailored to your business?
            <br />
            We build customized solutions to fit your unique operational needs.
            Let’s connect.
          </h1>

          <button
            className="bg-white text-[#635bff] font-medium px-6 py-3 rounded-md border
           border-white hover:bg-gray-200 transition"
          >
            Request Demo
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            className=""
            src="/checking-email.png"
            alt="Email checking illustration"
            width={300}
            height={300} 
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
