import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
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
          <Route path='/about' component={ About }/>
          <Route path='/publications' component={ Publications }/>
          <Route path='/news' component={ News }/>
          <Route path='/events' component={ Events }/>
          <Route path='/contact' component={ Contact }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
