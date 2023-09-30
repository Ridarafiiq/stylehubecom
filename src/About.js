import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import Aboutt from "./components/Aboutt";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "STYLE HUB",
  };

  return (
    <>
     
      {myName}
      <HeroSection myData={data} />
      
      <Aboutt />
    </>
  );
};

export default About;
