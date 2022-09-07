import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Komponen/Banner/Banner';
import { Navbarnya } from './Komponen/NavBar/Navbarnya';
import { Skill } from './Komponen/Skills/Skill';
import { Projects } from './Komponen/Karya/Projects';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Banner/>
      <Skill/>
      <Projects/>
      
      
    </div>
  );
}

export default App;
