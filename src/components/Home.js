import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
/* import { AiOutlineStop } from "react-icons/ai";
import { GiProgression } from "react-icons/gi"; */
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Home.css";
import HabitBoard from "./HabitBoard";
//import CreateHabit from "./CreateHabit";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Home = ({ goodhabits, badhabits, motivation }) => {
  const [show, setShow] = useState(false);
  const [bHabits, setBHabits] = useState([]);
  const [gHabits, setGHabits] = useState([]);
  const [oHabits, setOHabits] = useState([]);
  const [showHabits, setShowHabits] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [ownHabitId, setOwnHabitId] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);

  const randomMotivation = Math.floor(Math.random() * motivation.length);

  console.log(oHabits, "oHabits");
  console.log(gHabits, "gHabits");

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  const handleDeleteGhabits = (id) => {
    const newList = gHabits.filter((gh) => gh.id !== id);
    setGHabits(newList);
  };
  const handleDeleteBhabits = (id) => {
    const newList = bHabits.filter((bh) => bh.id !== id);
    setBHabits(newList);
  };

  const handleDeleteOhabits = (id) => {
    const newList = oHabits.filter((oh) => oh.id !== id);
    setOHabits(newList);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowEditModal = () => setShowEditModal(true);
  /*const handleSelectghabit = () => {
    setGHabits((prev) => [...prev, ghabit])
  }*/

  const grows = [...Array(Math.ceil(goodhabits.length / 2))];
  const ghabitRows = grows.map((row, index) =>
    goodhabits.slice(index * 2, index * 2 + 2)
  );

  const brows = [...Array(Math.ceil(badhabits.length / 2))];
  const bhabitRows = brows.map((row, index) =>
    badhabits.slice(index * 2, index * 2 + 2)
  );

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
  console.log("motivation", motivation);
  return (
    <>
      <Container className="d-flex flex-column mt-4">
        <div className="d-flex justify-content-end">
          <BsFillPlusCircleFill size={50} onClick={handleShow} />
        </div>

        <Row>
          <Col className="quoteandhabits border rounded shadow mt-4">
            {showHabits === null &&
              show === false &&
              showCreateModal === false && (
                <Row className="quote">{motivation[randomMotivation].text}</Row>
              )}
            {goodhabits && showHabits === "goodhabits" && (
              <div>
                <p>Select</p>
                <h4>New Habit</h4>
              </div>
            )}
            {goodhabits &&
              showHabits === "goodhabits" &&
              ghabitRows.map((row, index) => (
                <Row className="mb-4" key={index}>
                  {row.map((ghabit, index) => (
                    <Col md={6} key={index}>
                      <Card
                        className="cardKlasse"
                        onClick={() => {
                          setGHabits((gHabits) => [...gHabits, ghabit]);
                          setShowHabits(null);
                        }}
                      >
                        <Card.Body className="border rounded">
                          <div>{ghabit.name}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}

            {badhabits && showHabits === "badhabits" && (
              <div>
                <p>Select</p>
                <h4>New Habit</h4>
              </div>
            )}
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
          </Col>
          <Col>
            <HabitBoard
              gHabits={gHabits}
              bHabits={bHabits}
              oHabits={oHabits}
              handleDeleteGhabits={handleDeleteGhabits}
              handleDeleteBhabits={handleDeleteBhabits}
              handleDeleteOhabits={handleDeleteOhabits}
              handleShowEditModal={handleShowEditModal}
            />
          </Col>
        </Row>

        <Modal
          className="d-flex justify-content-center mymodal"
          show={show}
          onHide={handleClose}
          centered={true}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="modalbody" onClick={handleModalClickGood}>
            Create good habit
          </Modal.Body>
          <Modal.Body className="modalbody" onClick={handleModalClickBad}>
            Break bad habit
          </Modal.Body>
          <Modal.Body
            className="modalbody"
            onClick={() => {
              setShowCreateModal(true);
              setShow(false);
            }}
          >
            Create My Own
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>

      {/* <Button variant="primary" onClick={handleShowCreateModal}>
        Launch demo modal
      </Button> */}

      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <InputGroup className="inputcreate mb-3">
            <FormControl
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Create your own habit"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => {
                setOHabits((oHabits) => [
                  ...oHabits,
                  { id: ownHabitId, name: userInput },
                ]);
                setOwnHabitId(ownHabitId + 1);
                setShowCreateModal(false);
              }}
            >
              Save
            </Button>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {" "}
        <Button variant="primary" onClick={handleShowEditModal}>
          Launch demo modal
        </Button>
        <Modal show={showEditModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!{" "}
            <InputGroup className="mb-3">
              <FormControl aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Home;
