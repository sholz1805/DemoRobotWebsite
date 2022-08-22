import NavBar from './components/NavBar'
import Page from './components/Page'
import TechNews from './components/TechNews'
import Future from './components/Future';
import Robots from './components/Robots';
import Rei from './components/Rei';
import TechTrend from './components/TechTrend';
import JeffBezoz from './components/JeffBezoz';
import AiOne from './components/AiOne';
import AiTwo from './components/AiTwo';
import SocialLinks from './components/SocialLinks';
import './App.css'


function App() {
  return (
    <div>
      <NavBar/>
      <Page />
      <TechNews />
      <Future />
      <Robots />
      <Rei/>
      <TechTrend/>
      <JeffBezoz />
      <AiOne/>
      <AiTwo/>
      <SocialLinks/>
    </div>
  );
}

export default App;
