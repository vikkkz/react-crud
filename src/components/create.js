import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  const postData = () => {
    axios.post(`https://6309eeb332499100327ddb99.mockapi.io/mydata`, {
    firstName,
    lastName,
    checkbox,
  }).then(() => {
    navigate('/read');
  })
}

  return(
  <Form className="create-form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' 
      onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' 
      onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions' 
    onChange={(e) => setCheckbox(!checkbox)}/>
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
)
}

export default Create