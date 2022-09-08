import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Komponen/Banner/Banner';
import { Navbarnya } from './Komponen/NavBar/Navbarnya';
import { Skill } from './Komponen/Skills/Skill';
import { Projects } from './Komponen/Karya/Projects';
import { Kontak } from './Komponen/Kontak/Kontak';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Kontak/>
      
      
    </div>
  );
}

export default App;
