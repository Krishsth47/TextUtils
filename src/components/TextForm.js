import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const TextForm = (props) => {
  const upperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const clear = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");
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
      </div>{" "}
      <div className="btn btn-danger" onClick={clear}>
        Clear
      </div>{" "}
      <div className="btn btn-primary" onClick={lowerClick}>
        convert to lower case
      </div>
    </Form>
  );
};
