import {
  Card,
  Typography,
  List,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function Sidebar() {
  return (
    <Card className="flex w-60 items-center rounded-md shadow-xl shadow-customBlue-500/5">
      <div className="p-2">
        <Typography variant="h5" className="mb-[-10px]" color="blue-gray">
          Categorias
        </Typography>
      </div>

      <List>
        <Checkbox
          id="aestheticField"
          label="Estética"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
        />
        <Checkbox
          id="autosField"
          label="Automotivo"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
        />
        <Checkbox
          id="healthcareField"
          label="Saúde"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
        />
        <Checkbox
          id="foodField"
          label="Alimentação"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
        />
        <Checkbox
          id="entertainmentField"
          label="Entreterimento"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
        />
      </List>

      <div className="flex justify-center gap-2 p-2">
        <Button className="bg-red-300 text-[10px]" size="sm">
          Limpar
        </Button>
        <Button className="bg-customOrange-500 text-[10px]" size="sm">
          Filtrar
        </Button>
      </div>

      <h2>da pra por outros itens aqui e dividir a sidebar em 2</h2>
    </Card>
  );
}

export default Sidebar;
