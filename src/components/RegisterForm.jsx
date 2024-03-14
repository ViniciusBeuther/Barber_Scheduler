import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react"

const RegisterForm = () => {
    return (
        <div className="bg-customBlue-500 text-white flex flex-col gap-2">
            <section className="flex gap-10 justify-between items-center">
                <div className="w-full">
                    <Input size="md" label="Nome da empresa" color="orange" className="w-full text-white" />
                </div>

                <div className="w-full">
                    <Input size="md" label="CNPJ" type="number" color="orange" className="w-full text-white" />
                </div>
            </section>
            <section className="flex gap-10">
                <div className="w-full">
                    <Select label="Selecione o segmento" color="orange" className="text-white">
                        <Option color="white">Saúde</Option>
                        <Option color="white">Cuidados Pessoais</Option>
                    </Select>
                </div>
            </section>

            <section>
                <Textarea size="md" label="Descrição" color="orange" className="text-white" />
            </section>
            
            <section>
                <span className="flex flex-col gap-2">
                    <Input size="md" label="E-mail" color="orange" className="text-white" />
                    <Input size="md" label="Senha" type="password" color="orange" className="text-white" />
                    <Typography variant="small" color="lightgray">
                        *** Use no mínimo 8 caracteres, 1 letra maiuscula, 1 minuscula e 1 número
                    </Typography>
                </span>
            </section>

            <Button size="md" className="bg-customOrange-500 hover:bg-orange-700">Registrar</Button>
        </div>
    )
}

export default RegisterForm