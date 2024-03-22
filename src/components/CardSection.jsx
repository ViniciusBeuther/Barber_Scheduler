import EstablishmentCard from "./EstablishmentCard";

const CardSection = ({ establishments }) => {
  console.log(establishments);
  return (
    <section className="ml-10 flex flex-wrap gap-6">
      {establishments.length >= 1 ? (
        establishments.map((establishment) => {
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
      ) : (
        <p className="w-full text-center text-xl text-white">
          Nenhum estabelecimento encontrado
        </p>
      )}
    </section>
  );
};
export default CardSection;
