import React from "react";

const About = () => {
  return (
    <div className="min-h-[600px] bg-gray-700 flex flex-col items-end justify-center mt-14 bg-[url('./assets/images/aboutUs.png')] bg-cover bg-no-repeat">
      <div className=" sm:mr-40 mx-auto sm:text-end text-center">
        <h3 className=" text-white text-5xl  font-semibold">The Best</h3>
        <h1 className=" text-yellow-400 text-7xl sm:text-9xl font-bold">PIZZA</h1>
        <h3 className=" text-white text-5xl ">Around</h3>
      </div>
    </div>
  );
};

export default About;
