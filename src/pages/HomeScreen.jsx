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
import { useState, useEffect } from "react";
import { supabase } from "../API/CreateCompany";

const HomeScreen = () => {

  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    setAllEstablishments(establishments);
  }, [establishments]);

  useEffect(() => {
    async function obterEstabelecimentos() {
      const { data, error } = await supabase
        .from("Company")
        .select("id,name,segment,description");
      if (error) {
        console.log("Erro ao buscar estabelecimentos", error);
      } else {
        const segmentToCategory = {
          entertainment: "Entretenimento",
          health: "Saúde",
          food: "Alimentação",
          hair: "Salão de Beleza",
          tools: "Ferramentas"
        };
  
        const establishmentsWithLogo = data.map(item => {
          let logoType;
          switch (item.segment) {
            case "entertainment":
              logoType = entertainmentIcon;
              break;
            case "health":
              logoType = healthIcon;
              break;
            case "food":
              logoType = foodServiceIcon;
              break;
            case "hair":
              logoType = hairSalon;
              break;
            case "tools":
              logoType = toolsIcon;
              break;
            default:
              logoType = null; // ou defina um ícone padrão caso necessário
              break;
          }
          return {
            ...item,
            logoType: logoType,
            category: segmentToCategory[item.segment] // Adiciona a categoria traduzida
          };
        });
        setEstablishments(establishmentsWithLogo);
      }
    }
    obterEstabelecimentos();
  }, []);

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
      return establishment.name
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

  const filterEstablishments2 = (
    aestheticField,
    autoField,
    healthField,
    foodField,
    entertainmentField
  ) => {
    const filteredEstablishments = establishments.filter((establishment) => {
      return (
        (aestheticField && establishment.segment === "aesthetic") ||
        (autoField && establishment.segment === "autos") ||
        (healthField && establishment.segment === "health") ||
        (foodField && establishment.segment === "food") ||
        (entertainmentField && establishment.segment === "entertainment")
      );
    });
    setAllEstablishments(filteredEstablishments);
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
          filterFunction={filterEstablishments2}
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
