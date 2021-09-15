import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import beastBios from './data.json'
import Container from 'react-bootstrap/Container';
import HornedBeastModal from './components/HornedBeastModal';
import {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedBeast: beastBios[0],
    }
  }

  showSelectedBeast = () => {
    this.setState({selected: true});
  }
  hideSelectedBeast = () => {
    this.setState({selected: false});
  }
  changeBeast = (newBeast) => {
    this.setState({selectedBeast: newBeast})
  }

  render() {
    return (
      <Container>
        <Header title="The Horned Beasts of Springfield" />
         <Main message="Big and strong or small and quick? Elegant and graceful or brash and brave?" beastBios={beastBios} showBeast={this.showSelectedBeast} changeBeast={this.changeBeast} />
         <HornedBeastModal selectedBeast={this.state.selectedBeast} show={this.state.selected} hide={this.hideSelectedBeast} image_url={this.props.image_url} title={this.props.title} description={this.props.description} />
         <Footer text="There are no wrong answers!" />
      </Container>
    );
  }
}

export default App;