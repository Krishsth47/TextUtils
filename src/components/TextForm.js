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
      <div className="btn btn-dark mx-2" onClick={upperClick}>
        Convert to UPPER CASE
      </div>
      <div className="btn btn-danger mx-2" onClick={clear}>
        Clear
      </div>
      <div className="btn btn-primary mx-2" onClick={lowerClick}>
        convert to lower case
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      <h3>Preview</h3>
      <p>{text.toLowerCase()}</p>
    </Form>
  );
};
