import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react"

const RegisterForm = () => {
    
    function handleSubmit(event){
        event.preventDefault();
        Object.entries(event.target).forEach((value) => {
            console.log(value[1].value)
        })
    }

    return (
        <div className="text-customBlue-500 flex flex-col gap-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <section className="bg-white flex gap-5 justify-between items-center">
                    <div className="w-full">
                        <Input size="md" label="Nome da empresa" color="orange" className="w-full text-customBlue-500" id="company__name" />
                    </div>

                    <div className="w-full">
                        <Input size="md" label="CNPJ" type="number" color="orange" className="w-full text-customBlue-500" id="company__cnpj" />
                    </div>
                </section>
                <section className="flex gap-10">
                    <div className="w-full">
                        <Select label="Selecione o segmento" color="orange" className="text-customBlue-500" id="company__segment">
                            <Option color="white">Saúde</Option>
                            <Option color="white">Cuidados Pessoais</Option>
                        </Select>
                    </div>
                </section>

                <section>
                    <Textarea size="md" label="Descrição" color="orange" className="text-customBlue-500" id="company__description" />
                </section>
                
                <section>
                    <span className="flex flex-col gap-2">
                        <Input size="md" label="E-mail" color="orange" className="text-customBlue-500" />
                        <Input size="md" label="Senha" type="password" color="orange" className="text-customBlue-500" id="company__password" />
                        <Typography variant="small" color="gray">
                            *** Use no mínimo 8 caracteres, 1 letra maiuscula, 1 minuscula e 1 número
                        </Typography>
                    </span>
                </section>

                <Button type="submit" size="md" className="bg-customOrange-500 hover:bg-orange-700">Registrar</Button>
            </form>
        </div>
    )
}

export default RegisterForm