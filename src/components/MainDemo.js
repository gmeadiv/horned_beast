import {Component} from 'react';
import NumberList from './NumberList.js';
import OptionSelector from './OptionSelector.js';

const allHorns = [0,1,2,3]

class MainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: [0,1,2,3],
    }
  }

  handleSelect = (choice) => {
    const allHorns = [0,1,2,3];
    let updatedHorns;
    if (choice === 'oneHorn') {
      updatedHorns = allHorns.filter(numOfHorns => )
    } else if (choice === 'twoHorns') {
      updatedHorns = allHorns.filter(something)
    } else if (choice === 'threeHorns') {
      updatedHorns = allHorns.filter(something)
    } else {
      updatedHorns = allHorns
    }

    this.setState({
      horns: updatedHorns,
    })
  }

  render() {
    return (
      <>
      <OptionSelector onSelect={this.handleSelect} />
      <NumberList horns={this.state.horns}/>
      </>
    )
  }
}

export default MainDemo;