import useScrollToSection from "../hooks/useScrollToSection";

const CtaPage = () => {

  const scrollToSection = useScrollToSection();

  return (
    <div className="p-2">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 text-center p-4 border-2 border-green-500 rounded-md">
          <h3 className="text-lg md:text-2xl">Ready to accelerate your digital vision</h3>
          <p className="text-xs md:text-lg">Transform your project from concept to reality
            with strategic development and precision execution
          </p>
          <button onClick={() => scrollToSection("contact")} className="text-lg border-2 border-green-500 rounded-md p-1 w-full max-w-52 transition-all duration-200 hover:scale-105 md:text-2xl md:p-2">Book a call</button>
        </div>
      </div>
    </div>
  );
}

export default CtaPage;