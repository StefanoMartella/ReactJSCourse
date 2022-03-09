import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/pages/elements/Footer";
import Navbar from "./components/pages/elements/Navbar";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import UserPage from "./components/pages/UserPage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile">
            <Route index element={<ProfilePage />} />
            <Route path=":username" element={<UserPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
