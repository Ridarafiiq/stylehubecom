import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Slider from "./components/Slider";



const Home = () => {

  const data = {
    name: "STYLE HUB (RIDA)",
  };

  return (
    <>
      <Slider />
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
      </>
  );
};

export default Home;
