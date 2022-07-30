import { useEffect, useState } from 'react';
import Goblin from './components/goblins/Goblin';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  // const URL = 'http://localhost:4200/api/v1/goblins';
  const URL = 'https://goblin-collectors-server.herokuapp.com/api/v1/goblins';

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
