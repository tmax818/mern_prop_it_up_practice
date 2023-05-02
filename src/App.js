import logo from './logo.svg';
import './App.css';
import {PersonCard} from "./Components/PersonCard";

function App() {
  return (
    <>
      <PersonCard firstName = "Tyler" lastName= "Maxwell" age={39} hairColor = "brown" />
      <PersonCard firstName = "John" lastName= "M" age={35} hairColor = "black" />
      <PersonCard firstName = "Toby" lastName= "Butler" age={48} hairColor = "blonde" />
      <PersonCard firstName = "Matt" lastName= "McLean" age={49} hairColor = "bald" />
    </>
  );
}

export default App;
