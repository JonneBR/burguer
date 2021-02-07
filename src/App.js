import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
   <Router>
     <Navbar />
   <Switch>
     <LandingPage/>
   </Switch>
   </Router>
  );
}

export default App;
