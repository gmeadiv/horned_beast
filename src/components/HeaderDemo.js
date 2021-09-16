import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class HeaderDemo extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        Numeral Filter
      </Navbar.Brand>
      </Container>
    </Navbar>
    )
  }
}

export default HeaderDemo;