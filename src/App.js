import Header from './Components/Header/Header'
import LandingPage from './Components/LandingPage/LandingPage';
import GroupsPage from './Components/GroupsPage/GroupsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import TeamPage from './Components/TeamPage/TeamPage';

import {Routes, Route, Link} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">

      <Header />
      <nav>

      </nav>

      <main>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/groups" element={<GroupsPage />}></Route>
        <Route path='/projects' element={<ProjectsPage />}></Route>
        <Route path='/team' element={<TeamPage />}></Route>
      </Routes>
      </main>

    </div>
  );
}

export default App;
