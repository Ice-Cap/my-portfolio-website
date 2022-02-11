import Introduction from "./components/Introduction";
import PersonalProjects from './components/PersonalProjects';
import ProfessionalProjects from './components/ProfessionalProjects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Introduction />
      <PersonalProjects />
      <ProfessionalProjects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
