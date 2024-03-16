import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import CardSection from "../components/CardSection";

const HomeScreen = () => {
  return (
    <main className="flex h-screen flex-col bg-customBlue-500">
      <Header />
      <section className="m-5 flex flex-1">
        <Sidebar />
        <div className="flex flex-col gap-16">
          <section className="w-full">
            <SearchBar />
          </section>
          <CardSection />
        </div>
      </section>
      {/*<Footer />*/}
    </main>
  );
};

export default HomeScreen;
