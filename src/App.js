import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";




import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import RealEstate from './components/realEstate/realEstate';
import Contact from './components/contact/contact';

class App extends Component {
  

  render() {
    return (
      
        <div className='App'>
          <Router>
          <Header />
          <Route exact path="/" component={About} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/portfolio" component={Portfolio} />  
          <Route exact path="/realestate" component={RealEstate} /> 
          <Route exact path="/contact" component={Contact} /> 
          <Footer />
          </Router>
        </div>
      
    );
  }
}

export default App;
