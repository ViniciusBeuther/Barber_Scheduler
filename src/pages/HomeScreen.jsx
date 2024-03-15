import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const HomeScreen = () => {
  return (
    <section className="flex h-screen flex-col bg-customBlue-500">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
      </main>
      <Footer />
    </section>
  );
};

export default HomeScreen;
