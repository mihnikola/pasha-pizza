import MenuCard from "../layouts/MenuCard";
import menu7 from '../assets/images/menu7.jpg';
import menu8 from '../assets/images/menu8.jpg';
import menu9 from '../assets/images/menu9.jpg';
import menu10 from '../assets/images/menu10.jpg';

const OtherMenu = () => {
  const menuData = [
    {
      id: 7,
      images: menu7,
      title: "Sandwich Marvel",
      price: "16.99",
    },
    {
      id: 8,
      images: menu8,
      title: "Pesto Spaghetti",
      price: "18.99",
    },
    {
      id: 9,
      images: menu9,
      title: "Hawaiian Pasta",
      price: "14.99",
    },
    {
      id: 10,
      images: menu10,
      title: "Truffle Tortilas",
      price: "15.99",
    },
  ];
  return (
    <div className="min-h-[600px] container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center mt-20 md:mt-10 mb-3">
        Other Menu
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            image={item.images}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherMenu;
