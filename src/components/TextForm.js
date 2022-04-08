import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const TextForm = (props) => {
  const upperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("Enter your text here");
  return (
    <Form className="container py-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <h1>{props.heading}</h1>
        <Form.Control
          as="textarea"
          value={text}
          onChange={handleOnChange}
          rows={8}
        />
      </Form.Group>
      <div className="btn btn-dark" onClick={upperClick}>
        Convert to UPPER CASE
      </div>
    </Form>
  );
};
