import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import SigninForm from "./components/SigninForm";
import Home from "./components/Home";

function App() {
  const [goodHabits, setGoodHabits] = useState([]);
  const [badHabits, setBadHabits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/ghabits").then(
      (response) => {
        setGoodHabits(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/bhabits").then(
      (response) => {
        setBadHabits(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Navigation />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route
          path="/home"
          element={<Home goodhabits={goodHabits} badhabits={badHabits} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
