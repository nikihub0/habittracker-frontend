import React from "react";
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
//import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import { useWindowSize, useTimeout } from "react-use";
import Confetti from "react-confetti";

const OHabitItem = ({ oh, handleDeleteOhabits }) => {
  const [checked, setChecked] = useState(false);
  const [isComplete] = useTimeout(6000);

  const { width, height } = useWindowSize();

  return (
    <li className="d-flex shadow listClass border rounded align-items-center habitline m-3 p-3">
      <input
        className="mx-3"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div className="flex-grow-1">{oh.name}</div>

      {checked && (
        <Confetti width={width} height={height} recycle={!isComplete()} />
      )}

      <Button className="button" variant="outline-primary">
        Edit
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => handleDeleteOhabits(oh.id)}
      >
        Delete
      </Button>
    </li>
  );
};

export default OHabitItem;
