import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import CardSection from "../components/CardSection";
import entertainmentIcon from "../assets/Icons/entertainment-icon.png";
import healthIcon from "../assets/Icons/health-icon.png";
import foodServiceIcon from "../assets/Icons/food-service-icon.png";
import hairSalon from "../assets/Icons/hair-salon-icon.png";
import toolsIcon from "../assets/Icons/tools-icon.png";
import { useState } from "react";

const HomeScreen = () => {
  const establishments = [
    {
      id: 0,
      establishmentName: "Sessão filmes antigos",
      logoType: entertainmentIcon,
      category: "entertainment",
      summary: "Cinema com sucessos dos anos 90",
    },
    {
      id: 1,
      establishmentName: "Clinica bem estar",
      logoType: healthIcon,
      category: "health",
      summary: "Agende consultas com nossos psicólogos",
    },
    {
      id: 2,
      establishmentName: "Paris 1",
      logoType: foodServiceIcon,
      category: "food",
      summary: "Reserve uma mesa e venha provar nossos pratos",
    },
    {
      id: 3,
      establishmentName: "Barbearia do calvo",
      logoType: hairSalon,
      category: "aesthetic",
      summary: "Entre calvo e saia cabeludo",
    },
    {
      id: 4,
      establishmentName: "Mecânica do Zeca",
      logoType: toolsIcon,
      category: "autos",
      summary: "Agende uma revisão",
    },
  ];
  const [allEstablishments, setAllEstablishments] = useState(establishments);
  const [establishmentTyped, setEstablishmentTyped] = useState("");
  const [categories, setCategories] = useState({
    aesthetic: false,
    autos: false,
    health: false,
    food: false,
    entertainment: false,
  });

  const filterEstablishments = (
    aestheticField,
    healthField,
    autoField,
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
    const filteredEstablishments = establishments.filter((establishment) =>
      chosen.some(
        (option) => option.name === establishment.category && option.value,
      ),
    );
    setAllEstablishments(filteredEstablishments);
  };

  const handleChange = (ev) => {
    setCategories((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.checked,
    }));
  };

  const handleSearchBarChange = (ev) => {
    setEstablishmentTyped(ev.target.value);
    const typedEstablishments = establishments.filter((establishment) => {
      return establishment.establishmentName
        .toLowerCase()
        .includes(ev.target.value.toLowerCase());
    });
    setAllEstablishments(typedEstablishments);
  };

  const handleClearCategories = () => {
    setCategories({
      aesthetic: false,
      autos: false,
      health: false,
      food: false,
      entertainment: false,
    });
    setAllEstablishments(establishments);
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
            filterEstablishments(
              categories.aesthetic,
              categories.health,
              categories.autos,
              categories.food,
              categories.entertainment,
            )
          }
          handleCheckBoxChange={handleChange}
          clearFieldsFunction={handleClearCategories}
        />
        <div className="flex w-full flex-col gap-10">
          <section className="w-full">
            <SearchBar
              establishmentTyped={establishmentTyped}
              handleSearchBarChange={handleSearchBarChange}
            />
          </section>
          <CardSection establishments={allEstablishments} />
        </div>
      </section>
      {/*<Footer />*/}
    </main>
  );
};

export default HomeScreen;
