import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import { Chute } from "./components/Chute";

import palavras from './palavras';

import "./reset.css";

export default function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}
