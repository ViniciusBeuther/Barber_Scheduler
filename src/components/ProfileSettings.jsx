import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "../API/CreateCompany";

const ProfileSettings = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const { data: fetchedData, error } = await supabase
                    .from("Company")
                    .select("*")
                    .eq("id", "150");
    
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

    return(
        data === null || data == undefined ?(
            <p>Loading</p>
        ) : (
        <section className="flex justify-center flex-col items-center">
            <div id="profile__container__picture">
                <p className="bg-customOrange-500 w-56 h-56 rounded-full">Picture</p>
            </div>

            <div className="mt-5">
                <Typography variant="h3" className="text-black text-center">
                    Dados da Empresa
                </Typography>
                
                <article className="flex gap-5">
                    <span id="profile__container__nameInfo">
                        <label htmlFor="profile__label__name" className="text-black font-bold">Empresa:</label>
                        <Input disabled={true} value={data[0].name} label="Nome:" />
                    </span>

                    <span id="profile__container__cnpj">
                        <label htmlFor="profile__label__cnpj" className="text-black font-bold">CNPJ:</label>
                        <Input disabled={true} value={data[0].cnpj} label="Nome:" />
                    </span>
                </article>

                <article className="flex gap-5">
                    <span id="profile__container__email">
                        <label htmlFor="profile__label__email" className="text-black font-bold">Empresa:</label>
                        <Input disabled={true} value={data[0].email} label="E-mail:" />
                    </span>

                    <span id="profile__container__segment">
                        <label htmlFor="profile__label__segment" className="text-black font-bold">Segmento:</label>
                        <Input disabled={true} value={data[0].segment} label="Segmento:" />
                    </span>
                </article>

                <label htmlFor="profile__label__segment" className="text-black font-bold">Segmento:</label>
                <Textarea disabled={true} value={data[0].description} label="Descrição:" />

                <article className="mt-2 flex justify-end" >
                    <Button className="bg-customOrange-500 hover:bg-orange-700" size="md">
                        Editar
                    </Button>
                </article>
            </div>
        </section>
        )
    )
}

export default ProfileSettings;