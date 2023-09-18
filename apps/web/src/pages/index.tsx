import Benefits from "@/components/pages/home/benefits";
import HomeInfo from "@/components/pages/home/homeInfo";
import Footer from "@/components/pages/shared/footer";
import Header from "@/components/pages/shared/header";

const Home = () => {
  return (
    <div className="mx-5  my-8 md:mx-24">
      <Header />

      <div className="mx-auto pt-10 text-center align-middle md:pt-24">
        <HomeInfo />
        <Benefits />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
