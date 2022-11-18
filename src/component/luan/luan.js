import logo from "./logo.svg";
import "./App.css";
import { Counter } from "../../features/counter/Counter";
export const Luan = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>Demo with reducx</p>
      </header>
    </div>
  );
};
