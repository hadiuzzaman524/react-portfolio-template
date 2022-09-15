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
import HireMe from './presentation/features/hire_me/HireMe';

function App() {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/education' element={<Contacts />} />
            <Route path='/projects' element={<MyProjects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/hireme' element={<HireMe/>}/>
          </Routes>

        </SideBar>
      </Router>
    </>
  );
}



export default App;
