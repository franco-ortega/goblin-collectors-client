import { useEffect, useState } from 'react';
import Goblin from './components/goblins/Goblin';
import GoblinForm from './components/goblins/GoblinForm';
import { getGoblins } from './services/request';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGoblins().then((res) => {
      setGoblins(res);
      setLoading(false);
    });
  }, []);

  console.log(goblins);

  return (
    <>
      <header>
        <h1>Goblin Collectors</h1>
      </header>
      <main>
        <GoblinForm setGoblins={setGoblins} />
        <ul>
          {loading
            ? 'Loading'
            : goblins.map((goblin) => (
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
