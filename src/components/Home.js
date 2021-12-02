import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineStop } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import HabitBoard from "./HabitBoard";

const Home = ({ goodhabits, badhabits }) => {
  const [show, setShow] = useState(false);
  const [bHabits, setBHabits] = useState([]);
  const [gHabits, setGHabits] = useState([]);
  const [showHabits, setShowHabits] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*const handleSelectghabit = () => {
    setGHabits((prev) => [...prev, ghabit])
  }*/

  const grows = [...Array(Math.ceil(goodhabits.length / 2))];
  const ghabitRows = grows.map((row, index) =>
    goodhabits.slice(index * 2, index * 2 + 2)
  );

  console.log(gHabits);

  const brows = [...Array(Math.ceil(badhabits.length / 2))];
  const bhabitRows = brows.map((row, index) =>
    badhabits.slice(index * 2, index * 2 + 2)
  );

  console.log(bHabits);

  // post machen mit gHabit (State) value
  // speichern in datenbank

  const handleModalClickBad = () => {
    setShowHabits("badhabits");
    handleClose();
  };
  const handleModalClickGood = () => {
    setShowHabits("goodhabits");
    handleClose();
  };

  return (
    <>
      <div className="Home">
        <BsFillPlusCircleFill size={50} onClick={handleShow} />
      </div>

      <Row>
        <Col>
          <ul>
            {goodhabits && showHabits === "goodhabits" && <h2>Good Habits</h2>}
            {goodhabits &&
              showHabits === "goodhabits" &&
              ghabitRows.map((row, index) => (
                <Row className="mb-2" key={index}>
                  {row.map((ghabit, index) => (
                    <Col md={6} key={index}>
                      <Card
                        className="cardKlasse"
                        onClick={() => {
                          setGHabits((gHabits) => [...gHabits, ghabit]);
                          setShowHabits(null);
                        }}
                      >
                        <Card.Body>{ghabit.name}</Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}

            {badhabits && showHabits === "badhabits" && <h2>Bad Habits</h2>}
            {badhabits &&
              showHabits === "badhabits" &&
              bhabitRows.map((row, index) => (
                <Row className="mb-2" key={index}>
                  {row.map((bhabit, index) => (
                    <Col md={6} key={index}>
                      <Card
                        className="cardKlasse"
                        onClick={() => {
                          setBHabits((bHabits) => [...bHabits, bhabit]);
                          setShowHabits(null);
                        }}
                      >
                        <Card.Body>{bhabit.name}</Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}

            {/* {goodhabits &&
          goodhabits.map((ghabit, index) => (
     
          ))} */}

            {/* <li key={index}>{ghabit.name}</li>)} */}
          </ul>
        </Col>
        <Col>
          <HabitBoard gHabits={gHabits} bHabits={bHabits} />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modalbody" onClick={handleModalClickBad}>
          Break bad habit <AiOutlineStop />
        </Modal.Body>
        <Modal.Body className="modalbody" onClick={handleModalClickGood}>
          Create good habit
          <GiProgression />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
