import MainPage from "./pages/MainPage";
import ProjectDetails from "./pages/projects/ProjectDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />        
      </Routes>
    </>
  )
}

export default App;