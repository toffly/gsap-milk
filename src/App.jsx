import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger, SplitText,ScrollSmoother)

ScrollSmoother.create({
	smooth: 1,
	effects: true
});

const App = () => {
  return (
    <main id="main-container">
      <Navbar/>
      <HeroSection/>
      <MessageSection/>
    </main>
  )
}

export default App