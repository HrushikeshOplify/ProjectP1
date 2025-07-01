const page = () => {
  return (
    <>
      <div className="mt-20 w-full bg-[#F5F7FB] py-20 sm:py-30">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row lg:gap-4 px-5 sm:px-10 justify-center">
          {/* Form Section */}
          <div className="w-full  rounded-lg bg-white px-2 mb-5 lg:w-1/2">
            <div className="rounded-md p-5 sm:px-10">
              <div className="mb-5 lg:mb-10">
                <h1 className="mb-0 text-5xl font-bold">
                  Let's Chat,
                  <br /> Reach Out to Us
                </h1>
              </div>

              <div className="mb-5 text-lg lg:mb-10">
                <h2>
                  Have questions or feedback? We're here to help. Send us a
                  message, and we’ll respond within 24 hours.
                </h2>
              </div>

              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Full name*"
                  className="mb-4 rounded-md bg-gray-200 p-2 ps-4 lg:mb-6"
                />

                <input
                  type="email"
                  placeholder="Business Email Address"
                  className="mb-4 rounded-md bg-gray-200 p-2 ps-4 lg:mb-6"
                />

                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="mb-4 rounded-md bg-gray-200 p-2 ps-4 lg:mb-6"
                />

                <textarea
                  rows={3}
                  placeholder="How we can help you?*"
                  className="mb-6 rounded-md bg-gray-200 p-2 ps-4 lg:mb-8"
                ></textarea>

                <button className="w-fit rounded-md  bg-indigo-600 px-4 py-2 text-start text-white ">
                  Contact Us
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex w-full flex-col gap-5 lg:w-1/2 lg:gap-3">
            <div className="">
              <img
                src="/contact_man.png"
                alt="Contact illustration"
                className="w-full"
              />
            </div>

            <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4">
              <div className="flex items-center gap-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-700">
                  <img src="/contact-mail.svg" alt="Email icon" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>contact@oplify.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-700">
                  <img src="/contact-call.svg" alt="Phone icon" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 8806047133</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex w-11 h-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-700">
                  <img src="/address.svg" alt="Address icon" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>Lohegaon, Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
