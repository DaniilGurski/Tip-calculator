import { useState } from 'react'
import TipCalculator from './components/TipCalculator';
import logo from "./assets/images/logo.svg";

export default function App() {
  return (
    <>
      <img class="logo" src={logo} alt="logo" />
      <TipCalculator />
    </>
  )
}
/* COMPONENTS: TipCalculator, InputField, TipPercentage, Sum */