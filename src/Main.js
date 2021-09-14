import {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

class Main extends Component {
  render() {
    const bios = this.props.beastBios;

    return (
      <Container>
        <h2>{this.props.message}</h2>
        <Row>
          <Col><HornedBeastImg bio={bios[0]} /></Col>
          <Col><HornedBeastImg bio={bios[1]} /></Col>
          <Col><HornedBeastImg bio={bios[2]} /></Col>
          <Col><HornedBeastImg bio={bios[3]} /></Col>
          <Col><HornedBeastImg bio={bios[4]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg bio={bios[5]} /></Col>
          <Col><HornedBeastImg bio={bios[6]} /></Col>
          <Col><HornedBeastImg bio={bios[7]} /></Col>
          <Col><HornedBeastImg bio={bios[8]} /></Col>
          <Col><HornedBeastImg bio={bios[9]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg bio={bios[10]} /></Col>
          <Col><HornedBeastImg bio={bios[11]} /></Col>
          <Col><HornedBeastImg bio={bios[12]} /></Col>
          <Col><HornedBeastImg bio={bios[13]} /></Col>
          <Col><HornedBeastImg bio={bios[14]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg bio={bios[15]} /></Col>
          <Col><HornedBeastImg bio={bios[16]} /></Col>
          <Col><HornedBeastImg bio={bios[17]} /></Col>
          <Col><HornedBeastImg bio={bios[18]} /></Col>
          <Col><HornedBeastImg bio={bios[19]} /></Col>
        </Row>
      </Container>
    );
  }
}

class HornedBeastImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = (event) => {
    let countUp = this.state.count + 1;
    this.setState({
      count: countUp,
    });
  }

  render() {
    return (
      <>
        <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='an horned beast' rounded fluid />
        <h3>{'❤️' + this.state.count}</h3>
      </>
    );
  }
}

export default Main;