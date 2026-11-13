import Topbar from "./Components/Topbar"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Featurescard from "./Components/Featurescard"
import Banner from "./Components/Banner"
import Deals from "./pages/Deals"
import Category from "./pages/Category"
import Page4 from "./pages/Page4"
import NewArrivals from "./pages/NewArrival"
import Banners2 from "./pages/Banners2"
import Testimonials from "./pages/Testimonials"
import About from "./pages/About"
import Footer from "./pages/Footer"


export default function App(){
  return(
    <div>
       <Topbar/>
       <Navbar/>
       <Hero />
       <Featurescard />
       <Banner />
       <Deals />
      <Category />
      <Page4 />
      <NewArrivals/>
      <Banners2/>
      <Testimonials />
      <About />
      <Footer />
    </div>
  )
}