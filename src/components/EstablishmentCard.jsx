import { Button } from "@material-tailwind/react";

const EstablishmentCard = ({
  establishmentName,
  logoType,
  category,
  summary,
}) => {
  return (
    <article className="flex h-40 w-60 flex-col justify-center gap-4 rounded-md bg-white p-2 shadow-md shadow-customBlue-500/5">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-customBlue-500 p-1">
          <img src={logoType} alt={establishmentName} />
        </div>
        <p>{establishmentName}</p>
      </div>
      <p className="h-14">{summary}</p>
      <div className="flex items-end justify-between">
        <p className="h-5 rounded-md bg-customBlue-300 p-1 text-xs leading-none text-white">
          {category}
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
};
export default EstablishmentCard;
