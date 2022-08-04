import { useEffect, useState } from 'react';
import Goblin from './components/goblins/Goblin';
import { getGoblins } from './services/request';

const App = () => {
  const [goblins, setGoblins] = useState([]);

  useEffect(() => {
    getGoblins().then((res) => setGoblins(res));
  }, []);

  console.log(goblins);

  return (
    <>
      <header>
        <h1>Goblin Collectors</h1>
      </header>
      <main>
        <ul>
          {goblins.length
            ? goblins.map((goblin) => (
                <li key={goblin.goblinId}>
                  <Goblin
                    id={goblin.goblinId}
                    name={goblin.goblinName}
                    strength={goblin.strength}
                    storage={goblin.storage}
                  />
                </li>
              ))
            : 'There are no goblins. So sad. :('}
        </ul>
      </main>
    </>
  );
};

export default App;
//
