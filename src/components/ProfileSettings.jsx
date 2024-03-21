import { Typography } from "@material-tailwind/react";
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
        data === null || null == undefined ?(
            <p>Loading</p>
        ) : (
        <section className="bg-green-400 flex justify-center flex-col items-center">
            <div id="profile__container__picture">
                <p className="bg-customOrange-500 w-56 h-56 rounded-full">Picture</p>
            </div>
            <div>
                <Typography variant="h3" className="text-black">
                    Dados da Empresa
                </Typography>
            </div>
        </section>
        )
    )
}

export default ProfileSettings;