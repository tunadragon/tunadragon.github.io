import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
            {/* <Route path='/about' exact component={About} /> */}
          </Switch>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
