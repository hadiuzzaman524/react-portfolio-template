import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import AboutMe from './presentation/features/about_me/AboutMe';
import Contacts from './presentation/features/contacts/Contacts';
import MyProjects from './presentation/features/my_projects/MyProjects';
import Skills from './presentation/features/skills/Skills';
import SideBar from './presentation/features/side_bar/SideBar';
import HomePage from './presentation/features/home_screen/Home';

function App() {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Education' element={<Contacts />} />
            <Route path='/Projects' element={<MyProjects />} />
            <Route path='/Skill' element={<Skills />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Routes>

        </SideBar>
      </Router>
    </>
  );
}



export default App;
