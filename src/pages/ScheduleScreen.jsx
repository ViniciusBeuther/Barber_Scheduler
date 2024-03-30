import { useParams } from "react-router-dom";
import { supabase } from "../API/CreateCompany";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { Button, Input } from "@material-tailwind/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const ScheduleScreen = () => {
  const [company, setCompany] = useState({
    name: "",
  });
  const [clientData, setClientData] = useState({
    name: "",
    cpf: "",
    dateScheduled: "",
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openModal = (type) => {
    if (type == "error") {
      setIsErrorModalOpen(true);
      return;
    }

    setIsConfirmModalOpen(true);
  };

  const closeModal = (type) => {
    if (type == "error") {
      setIsErrorModalOpen(false);
      return;
    }

    setIsConfirmModalOpen(false);
  };

  const handleClientChange = (ev) => {
    setClientData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleScheduleForm = async (ev) => {
    ev.preventDefault();
    if (clientData.cpf.length < 11) {
      openModal("error");
      return;
    }

    const { data: updatedData, error } = await supabase
      .from("Schedules")
      .insert({
        company_id: companyID,
        client_name: clientData.name,
        client_cpf: clientData.cpf,
        scheduled_interval: clientData.dateScheduled.slice(11, 16),
        scheduled_date: clientData.dateScheduled.slice(0, 10),
      })
      .select();

    if (error) {
      console.log(error);
    }
    if (updatedData) {
      console.log(updatedData);
    }

    openModal("confirm");
    setClientData({
      name: "",
      cpf: "",
      dateScheduled: "",
    });
  };

  const { companyID } = useParams();
  const tomorrow = dayjs(dayjs().add(1, "day")).format("YYYY-MM-DDTHH:mm");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: fetchedData, error } = await supabase
          .from("Company")
          .select("*")
          .eq("id", `${companyID}`);

        if (error) {
          throw error;
        }
        if (fetchedData.length >= 1) {
          setCompany((prev) => ({
            ...prev,
            name: fetchedData[0].name,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex h-screen flex-col bg-customBlue-500">
      <Header />
      <section className="flex w-full flex-1 flex-col items-center justify-center gap-5 shadow-md">
        <p className="text-3xl font-light text-white">{company.name}</p>
        <p className="text-xl font-light text-white">Agendamento</p>
        <form
          onSubmit={handleScheduleForm}
          className="flex h-60 w-72 flex-col gap-4 rounded-md bg-white p-4"
        >
          <Input
            name="name"
            label="Nome"
            color="orange"
            required
            onChange={handleClientChange}
            value={clientData.name}
          />
          <Input
            name="cpf"
            label="CPF"
            type="number"
            color="orange"
            required
            onChange={handleClientChange}
            value={clientData.cpf}
          />
          <input
            name="dateScheduled"
            type="datetime-local"
            className="w-full cursor-pointer rounded border border-[#D7DEE2] px-3 py-2 leading-tight text-gray-700 focus:border-orange-500 focus:outline-none"
            min={tomorrow}
            onChange={handleClientChange}
            value={clientData.dateScheduled}
          />
          <Button className="bg-customOrange-500" type="submit">
            Agendar
          </Button>
        </form>
        {isErrorModalOpen && (
          <Modal
            message={"CPF completo, por favor"}
            isModalOpen={isErrorModalOpen}
            closeModal={() => closeModal("error")}
          />
        )}
        {isConfirmModalOpen && (
          <Modal
            message={"Agendado!"}
            isModalOpen={isConfirmModalOpen}
            closeModal={() => closeModal("confirm")}
          />
        )}
      </section>
    </main>
  );
};

export default ScheduleScreen;
