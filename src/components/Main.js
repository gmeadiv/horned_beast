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
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[0]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[1]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[2]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[3]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[4]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[5]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[6]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[7]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[8]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[9]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[10]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[11]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[12]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[13]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[14]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[15]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[16]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[17]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[18]} /></Col>
          <Col><HornedBeastImg changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} bio={bios[19]} /></Col>
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

  handleClick = (newBeast) => {
    let countUp = this.state.count + 1;
    this.setState({
      count: countUp,
    });
    this.props.changeBeast(newBeast)
    this.props.showBeast();
  }

  render() {
    return (
      <>
        <Image onClick={() => this.handleClick(this.props.bio)} src={this.props.bio.image_url} alt='an horned beast' rounded fluid />
        <h3>{'❤️' + this.state.count}</h3>
      </>
    );
  }
}

export default Main;