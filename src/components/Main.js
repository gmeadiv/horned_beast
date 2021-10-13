import {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NumberList from './NumberList.js';
import OptionSelector from './OptionSelector.js';
import HornedBeast from './HornedBeast.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: this.props.beastBios,
    }
  }

  hornSelector = (choice) => {
    const bios = this.props.beastBios;

    this.setState({
      horns: this.props.beastBios,
    })

    if (choice) {
      let filteredHorns = bios.filter(beast => beast.horns === +choice);
      this.setState({
        horns: filteredHorns,
      })
    }
  }

  render() {
    const bios = this.state.horns;
    console.log(bios, '<---- BIOS LOG TWO ---<<<')
    return (
      <Container fluid>
        <h2>{this.props.message}</h2>
        <NumberList horns={this.state.horns} />
        <OptionSelector onSelect={this.hornSelector} />
        <Row xs={1} sm={2} md={3} lg={4}>
          {bios.map((beast, index) => (<Col key={index}><HornedBeast title={beast.title} image={beast.image_url} description={beast.description} changeBeast={this.props.changeBeast} showBeast={this.props.showBeast} />
          </Col>))}
        </Row>
      </Container>
    );
  }
}

export default Main;