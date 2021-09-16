import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import HeaderDemo from './components/HeaderDemo.js';
import MainDemo from './components/MainDemo.js';

class labFour extends Component {
  render(){
    return (
      <Container>
        <HeaderDemo />
        <MainDemo />
      </Container>
    )
  }
}

export default labFour;