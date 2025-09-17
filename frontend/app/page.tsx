import Main from "@/components/HomePage/Main";
import About from "@/components/HomePage/About";
import Affirmation from "@/components/HomePage/Affirmation";
import OurTruth from "@/components/HomePage/OurTruth";
import Services from "@/components/HomePage/Services";

const IndexPage = () => {
  return (
    <Main>
      <About />
      <Services />
      <Affirmation />
      <OurTruth />
    </Main>
  );
};

export default IndexPage;
