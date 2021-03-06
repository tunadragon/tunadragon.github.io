import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
