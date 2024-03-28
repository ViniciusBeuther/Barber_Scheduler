import {
  Card,
  Typography,
  List,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function Sidebar({
  aestheticBox,
  autoBox,
  healthBox,
  foodBox,
  entertainmentBox,
  filterFunction,
  clearFieldsFunction,
  handleCheckBoxChange,
}) {
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
          name="aesthetic"
          label="Estética"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
          checked={aestheticBox}
          onChange={handleCheckBoxChange}
        />
        <Checkbox
          id="autosField"
          name="autos"
          label="Automotivo"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
          checked={autoBox}
          onChange={handleCheckBoxChange}
        />
        <Checkbox
          id="healthcareField"
          name="health"
          label="Saúde"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
          checked={healthBox}
          onChange={handleCheckBoxChange}
        />
        <Checkbox
          id="foodField"
          name="food"
          label="Alimentação"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
          checked={foodBox}
          onChange={handleCheckBoxChange}
        />
        <Checkbox
          id="entertainmentField"
          name="entertainment"
          label="Entretenimento"
          ripple={true}
          className="h-[18px] w-[18px]"
          color="orange"
          checked={entertainmentBox}
          onChange={handleCheckBoxChange}
        />
      </List>

      <div className="flex justify-center gap-2 p-2">
        <Button
          className="bg-red-300 text-[10px]"
          size="sm"
          onClick={clearFieldsFunction}
        >
          Limpar
        </Button>
        <Button
          className="bg-customOrange-500 text-[10px]"
          size="sm"
          onClick={() =>
            filterFunction(
              aestheticBox,
              autoBox,
              healthBox,
              foodBox,
              entertainmentBox
            )
          }
        >
          Filtrar
        </Button>
      </div>

      {/* <h2>da pra por outros itens aqui e dividir a sidebar em 2</h2> */}
    </Card>
  );
}

export default Sidebar;
