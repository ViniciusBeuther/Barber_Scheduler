import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Header from "../components/Header";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { GrSchedule } from "react-icons/gr";
import ProfileSettings from "../components/ProfileSettings";
import SchedulerBoard from "../components/SchedulerBoard";

const AdminBoard = () => {
  const data = [
    {
      label: "Perfil",
      value: "Profile",
      component: <ProfileSettings />,
      icon: <CgProfile />,
    },
    {
      label: "Agendamentos",
      value: "Schedules",
      component: <SchedulerBoard />,
      icon: <GrSchedule />,
    },
    {
      label: "Configuração",
      value: "Settings",
      component: "NONE",
      icon: <IoMdSettings />,
    },
  ];

  return (
    <div className="h-[100vh] w-full flex-1 overflow-y-hidden bg-customBlue-500">
      <Header />
      <section id="admin__container" className="flex h-full w-full flex-1">
        <section id="admin__container__sidebar" className="w-full">
          <Tabs value="html" orientation="vertical" className="h-full">
            <TabsHeader className="flex w-72 bg-white opacity-[100%]">
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value} className="justify-start">
                  <div className="flex items-center justify-start gap-3 text-lg text-customBlue-500">
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody className="w-full bg-customGray-500">
              {data.map(({ value, component }) => (
                <TabPanel key={value} value={value}>
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default AdminBoard;
