const variablesList = [
  'Core',
  'Fundamental',
  'Critical'
];


function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getListLength() {
  return variablesList.length - 1;
}
console.log(getRandomNumber(getListLength()));

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {variablesList[getRandomNumber(getListLength())]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const concepts = [
  {
    id: 'components',
    title: 'Components',
    description:
      'The core UI building blocks of a React app. They describe a part of the user interface.',
    imagePath: 'src/assets/components.png',
  },
  {
    id: 'jsx',
    title: 'JSX',
    description:
      'A syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like.',
    imagePath: 'src/assets/jsx-ui.png',
  },
  {
    id: 'props',
    title: 'Props',
    description:
      'Short for properties, props are a way of passing data from parent to child components in React.',
    imagePath: 'src/assets/config.png',
  },
  {
    id: 'state',
    title: 'State',
    description:
      'A built-in object that allows components to create and manage their own data. State changes can trigger UI updates.',
    imagePath: 'src/assets/state-mgmt.png',
  },
];

function CoreConcept(props) {
  return (
    <li>
      <img src={props.imagePath} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function CoreConcepts() {
  return (
    <ul>
      {concepts.map((concept) => (
        <CoreConcept
          key={concept.id}
          title={concept.title}
          description={concept.description}
          imagePath={concept.imagePath}
        />
      ))}
    </ul>
  );
}

function Body() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...concepts[0]} />
          <CoreConcept {...concepts[1]} />
          <CoreConcept {...concepts[2]} />
          <CoreConcept {...concepts[3]} />
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
