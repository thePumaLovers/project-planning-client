import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import GroupsPage from "./Components/GroupsPage/GroupsPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import TeamPage from "./Components/TeamPage/TeamPage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import "@fontsource/permanent-marker";
import "@fontsource/quicksand";

function App() {
  return (
    <Container id="page-container" className="App">
      <Container id="content-wrap">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/groups" element={<GroupsPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/team" element={<TeamPage />}></Route>
          </Routes>
        </main>
      </Container>
      <Container id="footer">
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
