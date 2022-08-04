import { useEffect, useState } from 'react';
import Goblin from './components/goblins/Goblin';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  // const URL = process.env.REACT_APP_LOCALHOST_URL;
  const URL = process.env.REACT_APP_DATABASE_URL;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => setGoblins(response));
  }, []);

  console.log(goblins);

  return (
    <>
      <header>
        <h1>Goblin Collectors</h1>
      </header>
      <main>
        <ul>
          {goblins.map((goblin) => (
            <li key={goblin.goblinId}>
              <Goblin
                id={goblin.goblinId}
                name={goblin.goblinName}
                strength={goblin.strength}
                storage={goblin.storage}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
//
