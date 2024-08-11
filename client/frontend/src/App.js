import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";



function App() {
  return (
    <div className=" bg-[#212121]">
     <Navbar/>
     <Hero/>
     <About/> 
    </div>
  );
}

export default App;
