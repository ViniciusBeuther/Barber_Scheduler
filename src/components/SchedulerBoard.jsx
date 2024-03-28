import { useParams } from "react-router-dom";
import ModalChangeInfo from "./ModalChangeInfo";
import { Checkbox, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";

const SchedulerBoard = () => {
  const { companyID } = useParams();
  const [data, setData] = useState();
  
  useEffect(() => {
    async function fetchData(){
        try{
            let { data: Schedules, error } = await supabase
            .from('Schedules')
            .select("*")
            setData(Schedules);
            console.log("Fetched com sucessoo....")
        } catch(error){
            throw new Error("Algo deu errado")
        }
    }

    fetchData();
  }, [])

  return (
    !data ? (<p>Carregando...</p>) : (

    <div>
      <section>
        <Typography
          variant="h4"
          color="black"
          className="rounded-lg bg-white p-2 text-center"
        >
          Gerenciador de Horários
        </Typography>
      </section>

      <section className="mt-5">
        <label className="text-black" htmlFor="scheduleTable">
          Selecione o dia:
        </label>
        <br />
        <div className="flex justify-between">
          <input
            type="date"
            name="admin__date_selector"
            id="admin__date_selector"
            className="rounded-lg p-1"
          />
          <Checkbox
            label="Ver semana completa"
            ripple={false}
            className="h-5 w-5 rounded-full bg-white transition-all checked:border-green-600 checked:bg-green-500 hover:scale-105 hover:before:opacity-0"
          />
        </div>

      </section>

      <section>
        <Typography>
            {data[0].client_cpf}
        </Typography>
      </section>
    </div>
    )
  );
};

export default SchedulerBoard;
