
import './App.css';
import { Axios } from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Phpreact from './components/Phpreact';
import axios from 'axios';
function App() {
  
  return (

    <div className="App"><Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/membership">
          <Login />
        </Route>
        <Route exact path="/faqs">
          <Faqs />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch></Router>
      {/* <div className="modal fade" id="onload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Do You Want Cookie? We Want Yours! 🍪</h5>
            </div>
            <div className="modal-body">
              This site uses cookies to personalies the content for you.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
      <Phpreact/>
    </div>

  );
}

export default App;
