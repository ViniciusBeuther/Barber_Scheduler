import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react"
import { useState } from "react";
import { supabase } from "../API/CreateCompany";

async function insertIntoDB(Object) {
    
    const { data } = await supabase
    .from('Company')
    .insert([
        { 
            name: `${Object.name}`, 
            cnpj: `${Object.cnpj}`, 
            segment: `${Object.segment}`, 
            description: `${Object.description}`,
            email: `${Object.email}`,
            password: `${Object.password}`
        },
    ])
    .select()
}


const RegisterForm = () => {
    const [selectedSegment, setSelectedSegment] = useState(null);
    const [errorInName, setErrorInName] = useState(false);
    const [errorInCNPJ, setErrorInCNPJ] = useState(false);
    const [errorInEmail, setErrorInEmail] = useState(false);
    const [errorInPassword, setErrorInPassword] = useState(false);
    const [highlightColor, setHighlightColor] = useState('lightgray');
    
    // Function to validate email addresses
    function validateEmail(email) {
        const matchRegex = /.*@.*\..*/;
        if(email.match(matchRegex)) {
            console.log("valido")
            return true;
        } else {
            console.log("nao-valido")
            return false;
        }
    }

    // Function to validate password inserted
    function validatePassword(password) {
        var minimumRequirements = /^[\s\S]{8,50}$/, 
        upper = /[A-Z]/,
        lower = /[a-z]/,
        numeric = /[0-9]/

        if(minimumRequirements.test(password)){
            return true;
        } else {
            setHighlightColor('red');
            return false;
        }
    }

    // Function to clear the form fields
    function clearFields(event){
        event.preventDefault();
        try {
            const form = document.getElementById("register__form");
            Object.entries(form).forEach((input) => input[1].value='');
            setHighlightColor('gray')
            return console.log("Formulário Limpo...");    
        } catch (error) {
            return null
        }
    }

    // Function to get and request a POST method to the DB and validate form's fields
    async function handleSubmit(event){
        event.preventDefault();
        const objectToInsert = {
            name: null,
            cnpj: null,
            segment: selectedSegment,
            description: null,
            email: null,
            password: null,
        }

        let canProceed = true;

        Object.entries(event.target).forEach((value) => {
            const inputID = value[1].id
            const inputContent = value[1].value

            // Select which information is on the Input and set error flag
            switch(inputID){
                case "company__name":
                    if(inputContent == ''){
                        setErrorInName(true);
                        canProceed = false;
                    } else {
                        objectToInsert.name = inputContent;
                        setErrorInName(false);
                    }
                    break
                    
                case "company__cnpj":
                    if(inputContent == ''){
                        setErrorInCNPJ(true);
                        canProceed = false;
                    } else {
                        objectToInsert.cnpj = inputContent;
                        setErrorInCNPJ(false);
                    }
                    break
                    
                case "company__email":
                    if(!validateEmail(inputContent)){
                    setErrorInEmail(true);
                    canProceed = false;
                } else {
                    objectToInsert.email = inputContent;
                    setErrorInEmail(false);
                }
                break

                case "company__description":
                    objectToInsert.description = inputContent;

                case "company__password":
                    if(!validatePassword(inputContent)){
                        setErrorInPassword(true);
                        canProceed = false;
                    } else {
                        objectToInsert.password = inputContent;
                        setErrorInPassword(false);
                    }
                break
            }
        })
        
        if(canProceed){
            await insertIntoDB(objectToInsert)
            clearFields(event)
        } else {
            alert('Tem algum erro no formulário')
        }
    }

    return (
        <div className="text-customBlue-500 flex flex-col gap-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2" id="register__form">
                <section className="bg-white flex gap-5 justify-between items-center">
                    <div className="w-full">
                        <Input error={errorInName} size="md" label="Nome da empresa" color="orange" className="w-full text-customBlue-500" id="company__name" />
                    </div>

                    <div className="w-full">
                        <Input error={errorInCNPJ} size="md" label="CNPJ" type="number" color="orange" className="w-full text-customBlue-500" id="company__cnpj" />
                    </div>
                </section>

                <section className="flex gap-10">
                    <div className="w-full">
                        <Select label="Selecione o segmento" color="orange" className="text-customBlue-500" id="company__segment" onChange={() => {setSelectedSegment(event.target.textContent)}}>
                            <Option color="white">Saúde</Option>
                            <Option color="white">Cuidados Pessoais</Option>
                            <Option color="white">Alimentício</Option>
                        </Select>
                    </div>
                </section>

                <section>
                    <Textarea size="md" label="Descrição" color="orange" className="text-customBlue-500" id="company__description" />
                </section>
                
                <section>
                    <span className="flex flex-col gap-2">
                        <Input error={errorInEmail} size="md" label="E-mail" color="orange" className="text-customBlue-500" id="company__email" />

                        <Input error={errorInPassword} size="md" label="Senha" type="password" color="orange" className="text-customBlue-500" id="company__password" />
                        
                        <Typography variant="small" color={highlightColor}>
                            *** Use no mínimo 8 caracteres, 1 letra maiuscula, 1 minuscula e 1 número
                        </Typography>
                    </span>
                </section>

                <Button type="submit" size="md" className="bg-customOrange-500 hover:bg-orange-700 mt-2">Registrar</Button>
            </form>
        </div>
    )
}

export default RegisterForm