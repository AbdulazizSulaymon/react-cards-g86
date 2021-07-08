import React from 'react'
import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default App;
