import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CtaPage from "./CtaPage";
import ProjectsPage from "./projects/ProjectsPage";
import ContactPage from "./contactPage/ContactPage";
import NavBar from "../components/Navbar";

const MainPage = () => {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
      <CtaPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  );
}

export default MainPage;
