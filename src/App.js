import Introduction from "./components/Introduction";
import Algorithms from './components/Algorithms';
import PersonalProjects from './components/PersonalProjects';
import ProfessionalProjects from './components/ProfessionalProjects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <main>
            <Introduction />
            <PersonalProjects />
            <Algorithms />
            <About />
            <Contact />
        </main>
    );
}

export default App;
