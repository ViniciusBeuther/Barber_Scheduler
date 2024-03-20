import { Tabs, TabsHeader } from "@material-tailwind/react";
import AdminSideBar from "../components/AdminSideBar";
import Header from "../components/Header";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { GrSchedule } from "react-icons/gr";

const AdminBoard = () => {
    return(
        <div className="w-full flex-1 bg-green-300 h-[100vh] overflow-y-hidden">
            <Header />
            <section id="admin__container" className="flex w-full flex-1 h-full">
                <section id="admin__container__sidebar" className="bg-red-200 w-[25%] p-2">
                    <Tabs className="flex flex-col gap-2">
                        <TabsHeader className="flex items-center justify-start gap-2">
                            <CgProfile />
                            Perfil
                        </TabsHeader>

                        <TabsHeader className="flex items-center justify-start gap-2">
                            <IoMdSettings />
                            Configurações
                        </TabsHeader>

                        <TabsHeader className="flex items-center justify-start gap-2">
                            <GrSchedule />
                            Agendamento
                        </TabsHeader>
                    </Tabs>
                </section>

                <section id="admin__container__content" className="bg-yellow-400 w-full">
                    Content
                </section>

            </section>
        </div>
    )
}

export default AdminBoard