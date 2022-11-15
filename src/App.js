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

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>{<Menu/>}</Navbar.Brand>
              </LinkContainer>
              <Nav>

              </Nav>
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
            </Routes>
          </Container>

        </main>
        <footer>
          <div>
            Todos los derechos reservados MiTIC @2022
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
