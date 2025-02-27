import { AboutUs, HeroSection, NaturalHealthy, NavBar, TopNav } from "./components"


const App = () => {
  return (
    <div className="w-full min-h-screen bg-primary font-poppins">
      <TopNav />
      <NavBar/>
      <HeroSection />
      <AboutUs />
      <NaturalHealthy />
    </div>
  )
}

export default App