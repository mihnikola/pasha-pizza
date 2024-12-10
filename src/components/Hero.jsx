import img from "../assets/img/heroNew.png";
import Button from "../layouts/Button";

import heroImg from '../assets/img/heroImg.jpg';
const Hero = () => {
  return (
    <div className=" bg-slate-600 text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      <img src={heroImg} className="object-cover md:h-[600px] min-h-[800px] w-full opacity-25" />

      {/* content section  */}
      <div className="lg:flex lg:w-4/5 w-full text-center lg:text-start  mt-20 space-y-4 absolute">
        <div className="flex flex-col gap-7 lg:w-2/3 p-10 xs:max-w-full">
          <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
            Authentic <span className="text-yellow-500">Pizzas</span> Timeless
            Flavors
          </h1>
          <p className="text-base min-w-3/4 xs:max-w-1/4">
            Suggests a celebration of classic, traditional pizza recipes that have stood the test of time. These pizzas are built on the foundations of simple yet high-quality ingredients, often emphasizing regional Italian flavors that evoke a sense of nostalgia and culinary heritage.
          </p>
          {/* <div className=" lg:text-start text-center">
            <Button title="Read More" />
          </div> */}
        </div>
        {/* img section  */}

        <div className="text-center">
          <img className="animate-spin-slow  w-56 m-auto lg:w-96" src={img} alt="img" />
        </div>

      </div>


    </div>
  );
};

export default Hero;
