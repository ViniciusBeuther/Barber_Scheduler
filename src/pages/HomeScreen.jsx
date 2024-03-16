import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
const HomeScreen = () => {
  return (
    <section className="flex h-screen flex-col bg-customBlue-500 w-full">
      <Header />
      <main className="flex flex-1 m-5">
        <Sidebar />
        <section className="w-full">
          <SearchBar />
        </section>
      </main>
      {/*<Footer />*/}
    </section>
  );
};

export default HomeScreen;
