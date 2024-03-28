import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";
import { useParams } from "react-router-dom";
import ErrorModal from "./ErrorModal";

const ProfileSettings = () => {
  const [data, setData] = useState({
    cnpj: "",
    created_at: "",
    description: "",
    email: "",
    id: +"",
    name: "",
    password: "",
    segment: "",
  });
  const [formItemsEnable, setFormItemsEnable] = useState({
    companyName: true,
    companyCNPJ: true,
    companyEmail: true,
    companySegment: true,
    companyDescription: true,
  });
  const [saveBtnvisible, setSaveBtnvisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { companyID } = useParams();

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
          setData(fetchedData[0]);
        }
        console.log(fetchedData[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  const enableEditCompanyInfo = () => {
    setFormItemsEnable((prevItems) => ({
      companyName: !prevItems.companyName,
      companyCNPJ: !prevItems.companyCNPJ,
      companyEmail: !prevItems.companyEmail,
      companySegment: !prevItems.companySegment,
      companyDescription: !prevItems.companyDescription,
    }));
  };

  const handleChangeData = (ev) => {
    setData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const makeSaveBtnVisibility = () => {
    setSaveBtnvisible((prev) => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendUpdatedAdminData = async (ev) => {
    ev.preventDefault();
    const { data: updatedData, error } = await supabase
      .from("Company")
      .update({
        cnpj: data.id,
        created_at: data.created_at,
        description: data.description,
        email: data.email,
        id: data.id,
        name: data.name,
        password: data.password,
        segment: data.segment,
      })
      .eq("id", data.id);

    if (error) {
      openModal();
    }
    if (updatedData) {
      console.log(updatedData);
    }
  };

  return data === null || data == undefined ? (
    <p>Loading</p>
  ) : (
    <section className="flex flex-col items-center justify-center">
      <div className="mt-5">
        <Typography variant="h3" className="text-center text-black">
          Dados da Empresa
        </Typography>

        <form onSubmit={sendUpdatedAdminData}>
          <article className="flex gap-5">
            <span id="profile__container__nameInfo">
              <label
                htmlFor="profile__label__name"
                className="font-bold text-black"
              >
                Empresa:
              </label>
              <Input
                disabled={formItemsEnable.companyName}
                value={data.name}
                name="name"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                onChange={handleChangeData}
              />
            </span>

            <span id="profile__container__cnpj">
              <label
                htmlFor="profile__label__cnpj"
                className="font-bold text-black"
              >
                CNPJ:
              </label>
              <Input
                disabled={formItemsEnable.companyCNPJ}
                value={data.cnpj}
                name="cnpj"
                className="!border !border-gray-300 bg-white text-customBlue-500 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                onChange={handleChangeData}
              />
            </span>
          </article>

          <article className="flex gap-5">
            <span id="profile__container__email">
              <label
                htmlFor="profile__label__email"
                className="font-bold text-black"
              >
                Email:
              </label>
              <Input
                disabled={formItemsEnable.companyEmail}
                value={data.email}
                name="email"
                className="!border !border-gray-300 bg-white text-customBlue-500 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                onChange={handleChangeData}
              />
            </span>

            <span id="profile__container__segment" className="flex flex-col">
              <label
                htmlFor="profile__label__segment"
                className="font-bold text-black"
              >
                Segmento:
              </label>
              <select
                name="segment"
                disabled={formItemsEnable.companySegment}
                className="h-10 w-[12.5rem] rounded-[7px] bg-white px-3 py-2.5 text-customBlue-500 shadow-lg shadow-gray-900/5 outline-none disabled:bg-[#ECEFF1]"
                id="company__segment"
                value={data.segment}
                onChange={handleChangeData}
              >
                <option value="Saúde">Saúde</option>
                <option value="Cuidados Pessoais">Cuidados Pessoais</option>
                <option value="Alimentício">Alimentício</option>
              </select>
            </span>
          </article>

          <label
            htmlFor="profile__label__segment"
            className="font-bold text-black"
          >
            Descrição:
          </label>
          <Textarea
            disabled={formItemsEnable.companyDescription}
            value={data.description}
            name="description"
            className="!border !border-gray-300 bg-white text-customBlue-500 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            onChange={handleChangeData}
          />

          <article className="mt-2 flex justify-end gap-3">
            {saveBtnvisible && (
              <Button
                className="bg-customOrange-500 hover:bg-orange-700"
                size="md"
                type="submit"
              >
                Salvar
              </Button>
            )}
            <Button
              className="bg-customOrange-500 hover:bg-orange-700"
              size="md"
              type="button"
              onClick={() => {
                enableEditCompanyInfo();
                makeSaveBtnVisibility();
              }}
            >
              Editar
            </Button>
          </article>
        </form>
        <ErrorModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          message={"Erro na atualização dos dados"}
        />
      </div>
    </section>
  );
};

export default ProfileSettings;
