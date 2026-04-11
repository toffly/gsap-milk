import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";

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
      <FlavorSection/>
      <NutritionSection/>
      <BenefitSection/>
    </main>
  )
}

export default App