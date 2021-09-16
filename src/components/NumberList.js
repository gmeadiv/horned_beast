import {Component} from "react";
import ListGroup from "react-bootstrap/ListGroup";


class NumberList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.horns.map((horn) => (
          <ListGroup.Item key={horn}>{horn}</ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

export default NumberList;