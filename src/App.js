//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Caracterist from "./components/Caracterist";
import Dondeir from "./components/Dondeir";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Caracterist />
      <Dondeir/>
    </div>
  );
}

export default App;
