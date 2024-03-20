import entertainmentIcon from "../assets/Icons/entertainment-icon.png";
import healthIcon from "../assets/Icons/health-icon.png";
import foodServiceIcon from "../assets/Icons/food-service-icon.png";
import hairSalon from "../assets/Icons/hair-salon-icon.png";
import toolsIcon from "../assets/Icons/tools-icon.png";
import { Button } from "@material-tailwind/react";

const CardSection = ({ chosenOptions }) => {
  const establishments = [
    {
      establishmentName: "Sessão filmes antigos",
      logoType: entertainmentIcon,
      type: "entertainment",
      summary: "Cinema com sucessos dos anos 90",
    },
    {
      establishmentName: "Clinica bem estar",
      logoType: healthIcon,
      type: "health",
      summary: "Agende consultas com nossos psicólogos",
    },
    {
      establishmentName: "Paris 1",
      logoType: foodServiceIcon,
      type: "food",
      summary: "Reserve uma mesa e venha provar nossos pratos",
    },
    {
      establishmentName: "Barbearia do calvo",
      logoType: hairSalon,
      type: "aesthetic",
      summary: "Entre calvo e saia cabeludo",
    },
    {
      establishmentName: "Mecânica do Zeca",
      logoType: toolsIcon,
      type: "autos",
      summary: "Agende uma revisão",
    },
  ];

  const filteredEstablishments = establishments.filter((establishment) =>
    chosenOptions.some(
      (option) => option.name === establishment.type && option.value,
    ),
  );

  return (
    <section className="ml-10 flex flex-wrap gap-6">
      {filteredEstablishments.length < 1
        ? establishments.map((establishment, idx) => {
            return (
              <article
                key={idx}
                className="flex h-40 w-60 flex-col justify-center gap-4 rounded-md bg-white p-2 shadow-md shadow-customBlue-500/5"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-customBlue-500 p-1">
                    <img
                      src={establishment.logoType}
                      alt={establishment.establishmentName}
                    />
                  </div>
                  <p>{establishment.establishmentName}</p>
                </div>
                <p className="h-14">{establishment.summary}</p>
                <div className="flex items-end justify-between">
                  <p className="h-5 rounded-md bg-customBlue-300 p-1 text-xs leading-none text-white">
                    {establishment.type}
                  </p>
                  <Button
                    className="bg-customOrange-500 font-normal normal-case"
                    size="sm"
                  >
                    Agendar
                  </Button>
                </div>
              </article>
            );
          })
        : filteredEstablishments.map((establishment, idx) => {
            return (
              <article
                key={idx}
                className="flex h-40 w-60 flex-col justify-center gap-4 rounded-md bg-white p-2 shadow-md shadow-customBlue-500/5"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-customBlue-500 p-1">
                    <img
                      src={establishment.logoType}
                      alt={establishment.establishmentName}
                    />
                  </div>
                  <p>{establishment.establishmentName}</p>
                </div>
                <p className="h-14">{establishment.summary}</p>
                <div className="flex items-end justify-between">
                  <p className="h-5 rounded-md bg-customBlue-300 p-1 text-xs leading-none text-white">
                    {establishment.type}
                  </p>
                  <Button
                    className="bg-customOrange-500 font-normal normal-case"
                    size="sm"
                  >
                    Agendar
                  </Button>
                </div>
              </article>
            );
          })}
    </section>
  );
};
export default CardSection;
