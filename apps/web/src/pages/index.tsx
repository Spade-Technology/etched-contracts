import Benefits from "@/components/pages/home/benefits";
import HomeInfo from "@/components/pages/home/homeInfo";
import Footer from "@/components/pages/shared/footer";
import Header from "@/components/pages/shared/header";

const Home = () => {
  return (
    <div className="mx-5  md:mx-24 my-8">
      <Header />

      <div className="mx-auto pt-10 md:pt-24 text-center align-middle">
        <HomeInfo />
        <Benefits />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
