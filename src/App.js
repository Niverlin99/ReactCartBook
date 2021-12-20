import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/main/Header'
import Section from './components/main/Section';
import {DataProvider} from './components/main/Context'
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
