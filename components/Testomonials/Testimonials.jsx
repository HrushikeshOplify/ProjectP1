import { UserData } from "./TestimonialsData";

const Testimonials = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-center ">
          <h1 className="text-3xl md:text-4xl text-gray-600 font-semibold text-center">
            Don't just take our words for it, See what customers like you are
            saying
          </h1>
        </div>
        <div>
          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4 m-auto mt-5 ">
            {
            UserData.map((user,index) => (
              <div className="flex-col p-2 m-3 border-2 border-gray-300 rounded-lg" key={index}>
                <div className="flex justify-between items-center">
                  <div className=" flex">
                    <img
                      src={user.image}
                      className="w-15 h-15 rounded-4xl"
                    ></img>
                    <div>
                      <h6>{user.name}</h6>
                      <p>{user.like} </p>
                    </div>
                  </div>
                  <div className="text-yellow-400">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <div>
                  <p>
                    {user.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* card */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
