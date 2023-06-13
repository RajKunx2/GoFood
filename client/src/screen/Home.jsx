import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [foodCat, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCategory(response[1]);
    setFoodItems(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="h-[400px] mb-[100px]">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <div className="flex justify-center gap-2">
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-row gap-6 text-white">
                    <Input
                      size="lg"
                      label="Search Food"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {foodCat.length > 0 ? (
        foodCat.map((data) => (
          <div className="flex" key={data._id}>
            <div className="flex flex-col">
              <div className="text-2xl my-10">{data.CategoryName}</div>
              
              {foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filterItems) => (
                    <div key={filterItems._id}>
                      <Card
                        key={filterItems._id}
                        foodName={filterItems.name}
                        imgSrc={filterItems.img}
                        options={filterItems.options[0]}
                      />
                    </div>
                  ))
              ) : (
                <div>Hello ................</div>
              )}
            </div>
          </div>
        ))
      ) : (
        null
      )}

      <Footer />
    </div>
  );
}
