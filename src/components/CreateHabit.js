/* import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function CreateHabit() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowCreateModal}>
        Launch demo modal
      </Button>

      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          {" "}
          <InputGroup className=" inputcreate mb-3">
            <FormControl
              placeholder="Create your own habit"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <Button variant="outline-secondary" id="button-addon1">
              Button
            </Button>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateHabit;
 */
