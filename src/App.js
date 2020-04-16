import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import CompanyDetail from './components/CompanyDetail';
import CompanyList from './components/CompanyList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CompanyNews from './components/CompanyNews';


function App() {
    return (
      <div className="App">
        <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={CompanyList} />
            {/* <Route exact path="/:companyId" component={CompanyDetail} /> */}
            <Route exact path="/news" component={CompanyNews} />
            {/* null은 아무나 들어갈 수 있음 */}
          </Switch>
        <Footer />
        </Router>
      </div>
    );
  }


export default App;
