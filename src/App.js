import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import GroupsPage from "./Components/GroupsPage/GroupsPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import TeamPage from "./Components/TeamPage/TeamPage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container id="page-container" className="App">
      <Container id="content-wrap" >
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/groups" element={<GroupsPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route
              path="/projects/:projectid"
              element={<ProjectPage />}
            ></Route>
            <Route path="/team" element={<TeamPage />}></Route>
          </Routes>
        </main>
      </Container>
      <Container id="footer">
        <Footer/>
      </Container>
      
    </Container>
  );
}

export default App;
