import { useParams } from "react-router-dom";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";

const SchedulerBoard = () => {
  const { companyID } = useParams();
  const [scheduledClients, setScheduledClients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: schedules, error } = await supabase
          .from("Schedules")
          .select("*")
          .eq("company_id", `${companyID}`);
        console.log(schedules);
        setScheduledClients(schedules);
        if (error) {
          throw error;
        }
      } catch (error) {
        throw new Error("Algo deu errado");
      }
    }

    fetchData();
  }, []);

  return !scheduledClients ? (
    <p>Carregando...</p>
  ) : (
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
          {/* <Checkbox
            label="Ver semana completa"
            ripple={false}
            className="h-5 w-5 rounded-full bg-white transition-all checked:border-green-600 checked:bg-green-500 hover:scale-105 hover:before:opacity-0"
          /> */}
        </div>
      </section>

      <section className="mt-2 flex gap-3">
        {scheduledClients.map((client) => {
          return (
            <article
              className="flex h-40 w-48 flex-col flex-wrap items-center justify-evenly bg-customBlue-500 p-2 font-light text-white shadow-md"
              key={client.id}
            >
              <p>{client.client_name.slice(0, 9)}</p>
              <p>{client.scheduled_interval.slice(0, 5)}</p>
              <div>
                <Button>Atendido</Button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default SchedulerBoard;
