import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';

import CourseForm from './CourseForm';

function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Novo Curso
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;
