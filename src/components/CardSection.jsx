import entertainmentIcon from "../assets/Icons/entertainment-icon.png";
import healthIcon from "../assets/Icons/health-icon.png";
import foodServiceIcon from "../assets/Icons/food-service-icon.png";
import hairSalon from "../assets/Icons/hair-salon-icon.png";
import toolsIcon from "../assets/Icons/tools-icon.png";
import EstablishmentCard from "./EstablishmentCard";

const CardSection = ({ chosenOptions }) => {
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

  const filteredEstablishments = establishments.filter((establishment) =>
    chosenOptions.some(
      (option) => option.name === establishment.category && option.value,
    ),
  );

  return (
    <section className="ml-10 flex flex-wrap gap-6">
      {filteredEstablishments.length < 1
        ? establishments.map((establishment) => {
            return (
              <EstablishmentCard
                key={establishment.id}
                establishmentName={establishment.establishmentName}
                logoType={establishment.logoType}
                category={establishment.category}
                summary={establishment.summary}
              />
            );
          })
        : filteredEstablishments.map((establishment) => {
            return (
              <EstablishmentCard
                key={establishment.id}
                establishmentName={establishment.establishmentName}
                logoType={establishment.logoType}
                category={establishment.category}
                summary={establishment.summary}
              />
            );
          })}
    </section>
  );
};
export default CardSection;
