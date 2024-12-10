import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Review = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        {"Customer's Review"}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ReviewCard img={img1} name="Sophia Azura" description="I’ve been to many pizzerias, but none compare to this one! The crust is perfectly thin and crispy, the sauce is fresh and flavorful, and the toppings are always top-notch. You can really taste the quality of the ingredients. Whether you’re a classic Margherita lover or you like to experiment with different flavors, this pizzeria never disappoints." />
        <ReviewCard img={img2} name="John Deo" description="This place serves the best pizza in town—hands down. The ingredients are always fresh, and the flavors are incredible. The staff is friendly, the atmosphere is welcoming, and they truly know how to make a pizza. I always leave satisfied and craving more. If you haven't tried it yet, do yourself a favor and pay them a visit!" />
        <ReviewCard img={img3} name="Victoria Zoe" description="I’m a pizza enthusiast, and I can confidently say that this pizzeria is one of the best I’ve ever been to. From the first bite, you can tell that they care about quality. The variety of pizzas is amazing, and they have something for everyone. The cheese is perfectly melted, the sauce is rich and flavorful, and the toppings are always fresh." />
      </div>
    </div>
  );
};

export default Review;
