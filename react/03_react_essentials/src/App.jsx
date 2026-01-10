import { CORE_CONCEPTS } from './data.js';
import { VARIABLES_LIST } from './data.js';


function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getListLength() {
  return VARIABLES_LIST.length - 1;
}
console.log(getRandomNumber(getListLength()));

function Header() {
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


function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}


function Body() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    </main>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
