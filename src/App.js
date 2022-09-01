import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Komponen/Banner/Banner';
import { Navbarnya } from './Komponen/NavBar/Navbarnya';
import { Skill } from './Komponen/Skills/Skill';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Banner/>
      <Skill/>
      
      
    </div>
  );
}

export default App;
