import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";

const HabitBoard = ({ gHabits, bHabits }) => {
  const handleDelete = () => {};

  return (
    <div className="board border rounded p-4 my-5 mx-3 d-flex justify-content-center">
      {!gHabits.length && !bHabits.length && <div>Please select a habit</div>}
      {/* {gHabits.length} */}
      <div>
        <ul>
          {gHabits?.map((gh) => (
            <li className="d-flex listClass border rounded">
              {gh.name}{" "}
              {/* <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                  />
                </div>
              ))}
            </Form> */}
              <ButtonGroup className="d-flex " aria-label="Basic example">
                <Button variant="success">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="danger" onClick={() => handleDelete()}>
                  Right
                </Button>
              </ButtonGroup>
            </li>
          ))}
        </ul>

        {/* {bHabits.length} */}
        <ul>
          {bHabits &&
            bHabits.map((bh) => (
              <li className="d-flex listClass border rounded">
                {bh.name}{" "}
                <ButtonGroup className="d-flex " aria-label="Basic example">
                  <Button variant="success">Left</Button>
                  <Button variant="primary">Middle</Button>
                  <Button variant="danger">Right</Button>
                </ButtonGroup>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HabitBoard;
