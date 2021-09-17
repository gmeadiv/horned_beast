import {Component} from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = (newBeast) => {
    this.props.changeBeast(newBeast)
    this.props.showBeast();
  }
  handleVote = (event) => {
    let countUp = this.state.count + 1;
    this.setState({
      count: countUp,
    });
  }

  render() { 
    return (
      <>
        <Image onClick={() => this.handleClick(this.props.title)} src={this.props.image} alt='an horned beast' rounded fluid />
        <h6>Vote here:</h6>
        <Button variant="primary" onClick={this.handleVote}>
        {'❤️' + this.state.count}
        </Button>
      </>
    );
  }
}

export default HornedBeast;