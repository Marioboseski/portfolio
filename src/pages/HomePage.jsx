import MyFoto from "../assets/myFoto.jpg";
import Skills from "../data/skills-data/SkillsSection";
import useScrollToSection from "../hooks/useScrollToSection";

const HomePage = () => {

  const scrollToSection = useScrollToSection()

  return (

    <div id="home" className="flex justify-center items-center p-2 min-h-dvh">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 border-2 rounded-lg border-green-500 p-4 w-full md:flex-row-reverse md:gap-3 lg:justify-around ">
          <img src={MyFoto} alt="my-foto" className="w-full max-w-[320px] rounded-xl transition-all duration-200 hover:scale-105" />
          <div className="flex flex-col text-center justify-center  gap-3">
            <p className="text-green-500 text-5xl md:text-6xl">Frontend developer</p>
            <p className="md:text-lg">I am Frontend web developer with over 3 years of experience</p>
            <p className="md:text-lg">Building modern responsive web sites and web applications</p>
            <div className="flex gap-2 justify-center items-center  md:gap-3">
              <button onClick={() => scrollToSection("contact")} className="border-2 border-green-400 p-2 w-full max-w-[220px] text-2xl bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 ">Hire me</button>
              <button onClick={() => scrollToSection("projects")} className="border-2 border-white p-2 w-full max-w-[220px] text-2xl text-white font-semibold rounded-md transition-all duration-200 hover:scale-105">My work</button>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
