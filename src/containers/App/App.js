import React from 'react'
import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection';
import About from '../About';
import Clients from '../Clients';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <MainSection />
        <About />
        <Clients />
      </div>
    );
  }
}

export default App;
