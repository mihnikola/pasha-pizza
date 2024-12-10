import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Margarita Marvel",
      price: "16.99",
      description: "Margherita pizza, which typically features a simple topping of fresh mozzarella, tomatoes, and basil"
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      price: "18.99",
      description: "A Pesto Paradise pizza could have a base of pesto (made from basil, garlic, pine nuts, Parmesan cheese, and olive oil) "
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Bliss",
      price: "14.99",
      description: "Typically, a Hawaiian pizza is topped with ham and pineapple, offering a sweet and savory combination."
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Truffle Treasures",
      price: "15.99",
      description: "Truffles are known for their unique, aromatic quality, and they pair wonderfully with creamy cheeses and earthy toppings."
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Farmhouse Harvest",
      price: "18.99",
      description: "Inspired by the bounty of fresh, seasonal produce, this pizza could feature a combination of vegetables and meats."

    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
      title: "Cheese Frenzy",
      price: "13.99",
      description: "This pizza would feature a variety of cheeses, each contributing its unique flavor and texture."
    },
  ];
  return (
    <div className="min-h-[400px] container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center mt-20">
        Our Speciality
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
