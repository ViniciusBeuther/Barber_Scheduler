import { useParams } from "react-router-dom";

import Header from "../components/Header";

const ScheduleScreen = () => {

    const { companyID } = useParams();

  return (
    <main className="flex h-screen flex-col bg-customBlue-500">
      <Header />
    </main>
  );
};

export default ScheduleScreen;