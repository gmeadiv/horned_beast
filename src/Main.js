import {Component} from 'react';
import itchy from './images/itchy.png';
import scratchy from './images/Scratchy.png';

class Main extends Component {
  render() {
    return (
      <>
        <h1>Horned Beasts</h1>
        <HornedBeast title={'Itchy'} imgURL={itchy} description={'A fierce beast whose strength and spirit makes up for its size'} />
        <HornedBeast title={'Scratchy'} imgURL={scratchy} description={'Not the brightest beast but is the biggest.'} />
      </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return (
    <>
      <h2>This horned beast is known as {this.props.title}</h2>
      <img src={this.props.imgURL} alt='hornedBeast_img'/>
      <p>{this.props.description}</p>
    </>
    )
  }
}

export default Main;