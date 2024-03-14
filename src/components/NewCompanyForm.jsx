import { Button, Input } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { supabase } from "../API/CreateCompany";

async function insertCompanyToDB(recordToInsert) {
    
    const { data } = await supabase
    .from('Company')
    .insert([
        { 
            name: `${recordToInsert.name}`, 
            cnpj: `${recordToInsert.cnpj}`, 
            segment: `${recordToInsert.segment}`, 
            description: `${recordToInsert.description}` 
        },
    ])
    .select()
}

const NewCompanyForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyCNPJ, setCompanyCNPJ] = useState('');
    const [refreshFlag, setRefreshFlag] = useState(false);
    
    const recordToInsert = {
        name: `${companyName}`,
        cnpj: `${companyCNPJ}`,
        segment: 'Jogos',
        description: 'Uma loja de jogos.'
    }
    
    return (
        <form className="flex justify-center gap-10 mb-5">
        <span>
          <label htmlFor="company_name">Nome da empresa</label>
          <Input
            type="text"
            value={companyName}
            onChange={(ev) => {
                ev.preventDefault();
                setCompanyName(ev.target.value);
                setRefreshFlag(!refreshFlag);
            }}
            />
        </span>
        <span>
          <label htmlFor="cnpj">CPPJ:</label>
          <Input
            type="number"
            value={companyCNPJ}
            onChange={(ev) => {
              ev.preventDefault();
              setCompanyCNPJ(ev.target.value);
            }}
          />
        </span>

        <Button
          className="bg-black text-white p-2"
          onClick={(ev) => {
            ev.preventDefault();
            insertCompanyToDB(recordToInsert);
          }}
        >
          Cadastrar
        </Button>
      </form>
    );
}

export default NewCompanyForm