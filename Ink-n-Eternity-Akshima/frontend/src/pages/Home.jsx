import Header from "../components/Header";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Collection title="Collection"/>
      <Footer />
    </>
  );
}

export default Home;