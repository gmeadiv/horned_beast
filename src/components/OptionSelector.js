import {Component} from 'react';
import Form from 'react-bootstrap/Form';


class OptionSelector extends Component {
  handleChange = (event) => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <>
      <Form>
        <Form.Select onChange={this.handleChange}>
          <option value="">All Horned Beasts</option>
          <option value='1'>One Horn</option>
          <option value='2'>Two Horns</option>
          <option value='3'>Three Horns</option>
          <option value='100'>One Hundred Horns</option>
        </Form.Select>
      </Form>
    </>
    )
  }
}

export default OptionSelector;