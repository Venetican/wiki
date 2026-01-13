import { VARIABLES_LIST } from '../../data.js';
import './Header.css';


function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getListLength() {
  return VARIABLES_LIST.length - 1;
}

export function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {VARIABLES_LIST[getRandomNumber(getListLength())]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}