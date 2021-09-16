import {Component} from 'react';
import Form from 'react-bootstrap/Form';

class OptionSelector extends Component {
  handleChange = (event) => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <Form>
        <Form.Select onChange={this.handleChange}>
          <option value="all">All Horned Beasts</option>
          <option value="oneHorn">One Horn</option>
          <option value="twoHorns">Two Horns</option>
          <option value="threeHorns">Three Horns</option>
        </Form.Select>
      </Form>
    )
  }
}

export default OptionSelector;