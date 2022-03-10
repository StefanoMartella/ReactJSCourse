import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/pages/elements/Footer";
import Navbar from "./components/pages/elements/Navbar";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import UserPage from "./components/pages/UserPage";

const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense
          fallback={<h1 className="text-danger bg-danger">Caricamento...</h1>}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile">
              <Route index element={<ProfilePage />} />
              <Route path=":username" element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
