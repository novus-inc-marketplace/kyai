import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Adopt from './pages/Adopt';
import Volunteer from './pages/Volunteer';
import Workshops from './pages/Workshops';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import Members from './pages/Members';
import Admin from './pages/Admin';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/adopt" element={<Adopt />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/members" element={<Members />} />
              </Routes>
              <Footer />
            </MainLayout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/" element={<Admin />} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
