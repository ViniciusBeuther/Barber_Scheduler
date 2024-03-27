import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";
import ModalChangeInfo from "./ModalChangeInfo";
import { useParams } from "react-router-dom";

const ProfileSettings = () => {
  const [data, setData] = useState(null);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const { companyID } = useParams()

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

        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

// Display the modal
  function showModal(ev){
    ev.preventDefault();
    setModalIsOpened(true)
  }

// Close modal
  function handleClose(ev){
    ev.preventDefault();
    setModalIsOpened(false)
  }

  return data === null || data == undefined ? (
    <p>Loading</p>
  ) : (
    <section className="flex flex-col items-center justify-center">
      <div className="mt-5">
        <Typography variant="h3" className="text-center text-black">
          Dados da Empresa
        </Typography>

        <article className="flex gap-5">
          <span id="profile__container__nameInfo">
            <label
              htmlFor="profile__label__name"
              className="font-bold text-black"
            >
              Empresa:
            </label>
            <Input disabled={true} value={data[0].name} label="Nome:" />
          </span>

          <span id="profile__container__cnpj">
            <label
              htmlFor="profile__label__cnpj"
              className="font-bold text-black"
            >
              CNPJ:
            </label>
            <Input disabled={true} value={data[0].cnpj} label="Nome:" />
          </span>
        </article>

        <article className="flex gap-5">
          <span id="profile__container__email">
            <label
              htmlFor="profile__label__email"
              className="font-bold text-black"
            >
              Empresa:
            </label>
            <Input disabled={true} value={data[0].email} label="E-mail:" />
          </span>

          <span id="profile__container__segment">
            <label
              htmlFor="profile__label__segment"
              className="font-bold text-black"
            >
              Segmento:
            </label>
            <Input disabled={true} value={data[0].segment} label="Segmento:" />
          </span>
        </article>

        <label
          htmlFor="profile__label__segment"
          className="font-bold text-black"
        >
          Segmento:
        </label>
        <Textarea
          disabled={true}
          value={data[0].description}
          label="Descrição:"
        />

        <article className="mt-2 flex justify-end">
          <Button className="bg-customOrange-500 hover:bg-orange-700" size="md" onClick={(ev) => showModal(ev)}>
            Editar
          </Button>
        </article>

        {modalIsOpened ? (
          <>
            <Button className="close bg-red-400 px-3 py-2 rounded-full" onClick={(ev) => handleClose(ev)}>
                &times;
            </Button>
            <ModalChangeInfo data={data} isOpen={true} />
          </>
        ) : (
            <p>Fechado</p>
        ) }
      </div>
    </section>
  );
};

export default ProfileSettings;
