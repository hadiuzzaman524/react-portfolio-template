import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Contacts from './presentation/features/contacts/Contacts';
import MyProjects from './presentation/features/my_projects/MyProjects';
import Skills from './presentation/features/skills/Skills';
import SideBar from './presentation/features/side_bar/SideBar';
import HomePage from './presentation/features/home_screen/Home';
import HireMe from './presentation/features/hire_me/HireMe';
import Header from './presentation/features/header/Header';
import Education from './presentation/features/education/Education';

function App() {
  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<MyProjects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/hireme' element={<HireMe/>}/>
          </Routes>
        </Header>
      </Router>
    </>
  );
}



export default App;
