// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Header from './Header.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>what the hell is going on</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Header />
    <Main message={'Hi'} />
    <Footer />
    </div>
  );
}

class Main extends Component {
  render() {
    return (
      <>
        <h1>My message is {this.props.message}</h1>
        <HornedBeast title={'rhino'} />
      </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return <h1>I'm a horned beast with title of {this.props.title}</h1>
  }
}

class Footer extends Component {
  render() {
    return <h1>George Mead</h1>
  }
}

export default App;
