import { useState } from 'react'
import TipCalculator from './components/TipCalculator';
import logo from "./assets/images/logo.svg";

export default function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <TipCalculator />
    </>
  )
}