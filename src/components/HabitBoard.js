import React from "react";

import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
//import ButtonGroup from "react-bootstrap/ButtonGroup";
/* import { useState } from "react";
import { useWindowSize, useTimeout } from "react-use";
import Confetti from "react-confetti"; */
import GHabitItem from "./GHabitItem.js";
import BHabitItem from "./BHabitItem.js";
import OHabitItem from "./OHabitItem.js";

const HabitBoard = ({
  gHabits,
  bHabits,
  oHabits,
  handleDeleteGhabits,
  handleDeleteBhabits,
  handleDeleteOhabits,
  handleShowEditModal,
}) => {
  return (
    <>
      <div className="d-flex flex-column board border rounded shadow mt-4  d-flex justify-content-center">
        {!gHabits.length && !bHabits.length && !oHabits.length && (
          <div className="p-5">What do you want to do to improve yourself?</div>
        )}

        <ul className="boardul">
          {gHabits.length > 0 && (
            <div className="d-flex justify-content-center"></div>
          )}

          {gHabits?.map((gh) => (
            <GHabitItem
              gh={gh}
              handleDeleteGhabits={handleDeleteGhabits}
              handleShowEditModal={handleShowEditModal}
            />
          ))}
        </ul>
        <hr></hr>
        <ul className="boardul">
          {bHabits.length > 0 && (
            <div className="d-flex justify-content-center"></div>
          )}
          {bHabits &&
            bHabits.map((bh) => (
              <BHabitItem bh={bh} handleDeleteBhabits={handleDeleteBhabits} />
            ))}
        </ul>
        <hr></hr>
        <ul className="boardul">
          {oHabits.length > 0 && (
            <div className="d-flex justify-content-center"></div>
          )}
          {oHabits &&
            oHabits.map((oh) => (
              <OHabitItem oh={oh} handleDeleteOhabits={handleDeleteOhabits} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default HabitBoard;
