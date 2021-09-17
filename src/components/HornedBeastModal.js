import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class HornedBeastModal extends Component {
  render() {

    return (
      <Modal show={this.props.show} hide={this.props.hide}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <SelectedBeast bio={this.props.selectedBeast}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hide}>
            Hide
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SelectedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.bio.title}</h2>
        <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='the selected beast' rounded fluid/>
        <p>{this.props.bio.description}</p>
        <p>{'Horns: ' + this.props.bio.horns}</p>
      </>
    );
  }
}

export default HornedBeastModal;