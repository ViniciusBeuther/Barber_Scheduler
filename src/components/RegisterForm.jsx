import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react"

const RegisterForm = () => {
    return (
        <div className="bg-white">
            <section className="flex gap-10">
                <div>
                    <Input size="md" label="Nome da empresa" color="orange" />
                </div>

                <div>
                    <Input size="md" label="CNPJ" color="orange" />
                </div>
            </section>
            <section className="flex gap-10">
                <div>
                    <Select label="Selecione o segmento" color="orange">
                        <Option>Saúde</Option>
                        <Option>Cuidados Pessoais</Option>
                    </Select>
                </div>
            </section>

            <section>
                <Textarea size="md" label="Descrição" color="orange" />
            </section>
            
            <section>
                <span>
                    <Input size="md" label="E-mail" color="orange" />
                </span>
                <span>
                    <Input size="md" label="Senha" type="password" color="orange" />
                    <Typography variant="small" color="gray">
                        *** Use no mínimo 8 caracteres, 1 letra maiuscula, 1 minuscula e 1 número
                    </Typography>
                </span>
            </section>

            <Button size="md" className="bg-customOrange-500">Registrar</Button>
        </div>
    )
}

export default RegisterForm