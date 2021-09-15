import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends Component {
  render() {
    return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand>
      {this.props.title}
      </Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
}

export default Header;