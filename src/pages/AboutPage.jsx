import MyFoto from "../assets/myFoto.jpg";
import LinkedInlogo from "../assets/linkedin.svg";
import useScrollToSection from "../hooks/useScrollToSection";

const AboutPage = () => {

  const scrollToSection = useScrollToSection();

  return (
    <div id="about" className="flex justify-center items-center p-2">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 p-4 border-2 border-green-500 rounded-lg md:flex-row md:justify-around">
          <div className="relative transition-all duration-200 hover:scale-105">
            <img src={MyFoto} alt="my-foto" className="w-full max-w-[320px] rounded-[100%]" />
            <img src={LinkedInlogo} alt="linkedin-logo" className=" w-32 absolute bottom-0 cursor-pointer" />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-lg md:text-xl">About me</p>
            <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:gap-3">
              <p className="text-3xl md:text-4xl">Who am i?</p>
              <p className="border-2 border-blue-500 bg-blue-900 rounded-md p-2 text-lg md:p-3 md:text-xl">Mario Boseski</p>
            </div>
            <p className="text-center md:text-lg">Hello! I am Mario Boseski, Frontend Web Developer</p>
            <div className="flex items-center gap-2 border-b border-gray-300 p-2" >
              <p className="text-3xl font-bold">+3</p>
              <p className="text-gray-300 md:text-lg">Years of experience</p>
            </div>
            <p className="text-gray-300 border-b border-gray-300 p-2 md:text-lg">Passionate Proggramer</p>
            <button onClick={() => scrollToSection("contact")} className="border-2 border-green-500 p-2 w-full max-w-[220px] text-2xl rounded-md hover:bg-white hover:text-black">Get to know me</button>
            <a href="Mario_Boseski_Resume.pdf" download className="border-2 border-green-500 p-2 w-full max-w-[220px] text-2xl rounded-md transition-all duration-200 hover:scale-105">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;