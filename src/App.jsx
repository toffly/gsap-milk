import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <div className="h-dvh bg-red-500"/>
    </main>
  )
}

export default App