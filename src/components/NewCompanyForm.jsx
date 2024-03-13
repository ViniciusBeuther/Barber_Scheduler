import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { supabase } from "../API/CreateCompany";

const NewCompanyForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyCNPJ, setCompanyCNPJ] = useState('');

    async function insertCompanyToDB() {
        const recordToInsert = {
            name: `${companyName}`,
            cnpj: `${companyCNPJ}`,
            segment: 'Jogos',
            description: 'Uma loja de jogos.'
        }
        
        const { data } = await supabase
        .from('Company')
        .insert([
        { name: `${recordToInsert.name}`, cnpj: `${recordToInsert.cnpj}`, segment: `${recordToInsert.segment}`, description: `${recordToInsert.description}` },
        ])
        .select()
                
    }

    return(
        <form onSubmit={} className="flex justify-center gap-10 mb-5">
            <span>
                <label htmlFor="company_name">Nome da empresa</label>
                <Input type="text" value={companyName} onChange={(ev) => {
                    ev.preventDefault();
                    setCompanyName(ev.target.value);
                }}></Input>
            </span>
            <span>
                <label htmlFor="cnpj">CPPJ:</label>
                <Input type="number" 
                    value={companyCNPJ} 
                    onChange={(ev) => {
                        ev.preventDefault();
                        setCompanyCNPJ(ev.target.value);
                }}>
                    
                </Input>
            </span>
            
            <Button className="bg-black text-white p-2">Cadastrar</Button>
        </form>
    )
}

export default NewCompanyForm