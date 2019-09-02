import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';

import api from '../../services/api';

function CourseForm() {
  const [name, setName] = useState('');
  const [acronym, setAcronym] = useState('');
  const [description, setDescription] = useState('');

  

  let create = () => {
    try {
      api.post('/courses', {
        "name": name,
        "acronym": acronym,
        "description": description
      }).then(response => {
        if(response.status === 201){
          cleanFields();
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  let cleanFields = () => {
    setName('');
    setAcronym('');
    setDescription('');
  }

  return(
    <>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={name}
            placeholder="Nome" onChange={ (e) => setName(e.target.value) } />
        </Form.Group>
        <Form.Group controlId="acronym">
          <Form.Label>Sigla</Form.Label>
          <Form.Control type="text" value={acronym}
            placeholder="Sigla" onChange={ (e) => setAcronym(e.target.value) } />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" value={description}
            rows="3" onChange={ (e) => setDescription(e.target.value) } />
        </Form.Group>
        <Button variant="primary" type="button" onClick={ create }>
          Salvar
        </Button>
      </Form>
    </>
  );
}

export default CourseForm;
