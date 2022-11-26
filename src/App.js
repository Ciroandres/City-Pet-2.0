//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Caracterist from "./components/Caracterist";
import Dondeir from "./components/Dondeir";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import Contact from "./containers/Contact";
import Geolocate from "./containers/Geolocate";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>{<Menu />}</Navbar.Brand>
              </LinkContainer>
              <Nav></Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/caracteristicas" element={<Caracterist />} />
              <Route path="/dondeir" element={<Dondeir />} />
              <Route path="/geolocate" element={<Geolocate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <Container>
            <Services />
          </Container>
          <Container>
            <Caracterist />
          </Container>
          <Container>
            {" "}
            <Dondeir />
          </Container>
          <Container>
            <Geolocate />
          </Container>
          <Container>
            {" "}
            <Contact />
          </Container>
        </main>
        <footer>
          <Container>
            <Footer />
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
