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
import { AuthState } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./components/Home.css";
import Motivation from "./components/Motivation";
//import Confetti from "./components/Confetti";

function App() {
  const [goodHabits, setGoodHabits] = useState([]);
  const [badHabits, setBadHabits] = useState([]);
  const [motivation, setMotivation] = useState([]);

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

  useEffect(() => {
    axios.get("http://localhost:8080/motivation").then(
      (response) => {
        setMotivation(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <AuthState>
        <Navigation />
        {/*  <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/signin" element={<SigninForm />} />
            <Route
              path="/motivation"
              element={<Motivation motivation={motivation} />}
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home
                    goodhabits={goodHabits}
                    badhabits={badHabits}
                    motivation={motivation}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </AuthState>
    </>
  );
}

export default App;
