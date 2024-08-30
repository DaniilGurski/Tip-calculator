import TipCalculator from './components/TipCalculator';
import logo from "./assets/images/logo.svg";

export default function App() {
  return (
    <main>
      <h1 className="visually-hidden"> Tip calculator </h1>
      <img className="logo" src={logo} alt="logo" />
      <TipCalculator />
    </main>
  )
}