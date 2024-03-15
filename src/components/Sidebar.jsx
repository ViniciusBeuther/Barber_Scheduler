import {
  Card,
  Typography,
  List,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function Sidebar() {
  return (
    <Card className="flex w-60 items-center rounded-none shadow-xl shadow-customBlue-500/5">
      <div className="p-2">
        <Typography variant="h5" color="blue-gray">
          Filtros
        </Typography>
      </div>
      <List>
        <Checkbox id="aestheticField" label="Estética" ripple={true} />
        <Checkbox id="autosField" label="Automotivo" ripple={true} />
        <Checkbox id="healthcareField" label="Saúde" ripple={true} />
        <Checkbox id="foodField" label="Alimentação" ripple={true} />
        <Checkbox
          id="entertainmentField"
          label="Entreternimento"
          ripple={true}
        />
      </List>
      <div className="flex justify-center p-2">
        <Button className="bg-customBlue-500">Filtrar</Button>
      </div>

      <h2>da pra por outros itens aqui e dividir a sidebar em 2</h2>
    </Card>
  );
}

export default Sidebar;
