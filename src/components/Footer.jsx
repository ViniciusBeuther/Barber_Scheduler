import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer>
      <Typography
        variant="paragraph"
        className="bg-customBlue-500 py-2 text-center font-normal leading-none text-white"
      >
        Desenvolvido por Vinicius Beuther e Eric Coca
      </Typography>
    </footer>
  );
}
export default Footer;
