import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import ApresentationPage from './components/ApresentationPage/ApresentationPage';
import Home from './components/pages/Home';

function App() {
  return (
   <Router>
     <Navbar />
   <Switch>
   <Route path="/" exact component={Home} />
     {/* <LandingPage/>
     <ApresentationPage/> */}
   </Switch>
   </Router>
  );
}

export default App;
