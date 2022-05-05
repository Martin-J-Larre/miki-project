import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Publications from './pages/Publications';
import News from './pages/News';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={ Home }/>
          <Route path='/about' exact component={ About }/>
          <Route path='/publications' exact component={ Publications }/>
          <Route path='/news' exact component={ News }/>
          <Route path='/events' exact component={ Events }/>
          <Route path='/contact' exact component={ Contact }/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
