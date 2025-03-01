import { AboutUs, Discover, Footer, HeroSection, InstagramFeed, NaturalHealthy, NavBar, TopNav } from "./components"


const App = () => {
  return (
    <div className="w-full min-h-screen bg-primary font-poppins relative ">
      <TopNav />
      <NavBar/>
      <HeroSection />
      <AboutUs />
      <NaturalHealthy />
      <InstagramFeed />
      <Discover />
      <Footer />
    </div>
  )
}

export default App