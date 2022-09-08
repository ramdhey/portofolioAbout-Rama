import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Komponen/Banner/Banner';
import { Navbarnya } from './Komponen/NavBar/Navbarnya';
import { Skill } from './Komponen/Skills/Skill';
import { Projects } from './Komponen/Karya/Projects';
import { Kontak } from './Komponen/Kontak/Kontak';
import { Footer } from './Komponen/Footer/Footer';

import { Certificatenya } from './Komponen/Certificatenya/Certificate';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Certificatenya/>
      <Kontak/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
