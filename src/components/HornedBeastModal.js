import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class HornedBeastModal extends Component {
  render() {
    const bios = this.props.beastBios;

    return (
      <Modal show={this.props.show} hide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
          {/* we need to pass a title */}
        </Modal.Header>
        <Modal.Body>
          <SelectedBeast bio={this.props.selectedBeast}/>
          {/* we need to pass thru info on the current beast AND include description */}
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  //   }
  // }

  render() {
    return (
      <>
        <h2>{this.props.bio.title}</h2>
        <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='the selected beast' />
        {/* finish building this out */}
      </>
    );
  }
}

export default HornedBeastModal;