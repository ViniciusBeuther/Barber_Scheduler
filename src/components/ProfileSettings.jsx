import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";
import ModalChangeInfo from "./ModalChangeInfo";
import { useParams } from "react-router-dom";

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
    setFormItemsEnable({
      companyName: false,
      companyCNPJ: false,
      companyEmail: false,
      companySegment: false,
      companyDescription: false,
    });
  };

  const handleChangeData = (ev) => {
    setData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const makeSaveBtnVisibility = () => {
    setSaveBtnvisible(true);
  };

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
              className="h-10 w-[12.5rem] rounded-[7px] bg-white px-3 py-2.5 text-customBlue-500 shadow-lg shadow-gray-900/5 outline-none"
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
              onClick={enableEditCompanyInfo}
            >
              Salvar
            </Button>
          )}
          <Button
            className="bg-customOrange-500 hover:bg-orange-700"
            size="md"
            onClick={() => {
              enableEditCompanyInfo();
              makeSaveBtnVisibility();
            }}
          >
            Editar
          </Button>
        </article>
      </div>
    </section>
  );
};

export default ProfileSettings;
