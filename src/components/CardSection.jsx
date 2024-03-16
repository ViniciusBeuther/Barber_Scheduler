import entertainmentIcon from "../assets/Icons/entertainment-icon.png";
import healthIcon from "../assets/Icons/health-icon.png";
import foodServiceIcon from "../assets/Icons/food-service-icon.png";
import hairSalon from "../assets/Icons/hair-salon-icon.png";
import toolsIcon from "../assets/Icons/tools-icon.png";

const CardSection = () => {
  const establishments = [
    {
      establishmentName: "Sessão filmes antigos",
      logoType: entertainmentIcon,
      type: "Entreternimento",
      summary: "Cinema com sucessos dos anos 90",
    },
    {
      establishmentName: "Clinica bem estar",
      logoType: healthIcon,
      type: "Saúde",
      summary: "Agende consultas com nossos psicólogos",
    },
    {
      establishmentName: "Paris 1",
      logoType: foodServiceIcon,
      type: "Comida",
      summary: "Reserve uma mesa e venha provar nossos pratos",
    },
    {
      establishmentName: "Barbearia do calvo",
      logoType: hairSalon,
      type: "Estética",
      summary: "Entre calvo e saia cabeludo",
    },
    {
      establishmentName: "Mecânica do Zeca",
      logoType: toolsIcon,
      type: "Autos",
      summary: "Agende uma revisão",
    },
  ];
  return (
    <section className="ml-10 flex flex-wrap gap-4">
      {establishments.map((establishment) => {
        return (
          <article className="flex h-40 w-60 flex-col justify-center gap-4 rounded-md bg-white p-2 shadow-md">
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
            <div className="flex ">
              <p className="rounded-sm bg-customBlue-500 p-1 text-xs leading-none text-white">
                {establishment.type}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default CardSection;
