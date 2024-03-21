import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import CardSection from "../components/CardSection";
import { useState } from "react";

const HomeScreen = () => {
  const [categories, setCategories] = useState({
    aesthetic: false,
    autos: false,
    health: false,
    food: false,
    entertainment: false,
  });
  const [chosenOptions, setChosenOptions] = useState([]);

  const handleChange = (ev) => {
    setCategories((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.checked,
    }));
  };

  const handleFilter = (
    aestheticField,
    autoField,
    healthField,
    foodField,
    entertainmentField,
  ) => {
    const allOptions = [
      { name: "aesthetic", value: aestheticField },
      { name: "autos", value: autoField },
      { name: "health", value: healthField },
      { name: "food", value: foodField },
      { name: "entertainment", value: entertainmentField },
    ];

    const chosen = allOptions.filter((option) => option.value == true);

    setChosenOptions(chosen);

    setCategories({
      aesthetic: false,
      autos: false,
      health: false,
      food: false,
      entertainment: false,
    });
  };

  return (
    <main className="flex h-screen flex-col bg-customBlue-500">
      <Header />
      <section className="m-5 flex flex-1">
        <Sidebar
          aestheticBox={categories.aesthetic}
          HealthBox={categories.health}
          autoBox={categories.autos}
          foodBox={categories.food}
          entertainmentBox={categories.entertainment}
          filterFunction={() =>
            handleFilter(
              categories.aesthetic,
              categories.health,
              categories.autos,
              categories.food,
              categories.entertainment,
            )
          }
          handleCheckBoxChange={handleChange}
        />
        <div className="flex w-full flex-col gap-10">
          <section className="w-full">
            <SearchBar />
          </section>
          <CardSection chosenOptions={chosenOptions} />
        </div>
      </section>
      {/*<Footer />*/}
    </main>
  );
};

export default HomeScreen;
