import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const updateAPIData = () => {
    axios
      .put(`https://6309eeb332499100327ddb99.mockapi.io/mydata/${id}`, {
        firstName,
        lastName,
        checkbox
      })
      .then(() => {
        
        navigate('/read');
      });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={updateAPIData} type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Update;
