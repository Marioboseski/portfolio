import useScrollToSection from "../hooks/useScrollToSection";

const NavBar = () => {

  const scrollToSection = useScrollToSection();
  
  return (
    <header className="sticky top-0 z-50 bg-gray-600 font-semibold">
      <nav className="p-2 md:p-3">
        <ul className="flex flex-wrap justify-center items-center gap-2 p-1 md:text-2xl md:justify-evenly">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About me</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;