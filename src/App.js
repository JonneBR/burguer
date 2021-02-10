import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import ApresentationPage from './components/ApresentationPage/ApresentationPage';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import About from './components/pages/Sobre/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
