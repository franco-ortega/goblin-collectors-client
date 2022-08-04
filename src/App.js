import { useEffect, useState } from 'react';
import Goblin from './components/goblins/Goblin';
import GoblinForm from './components/goblins/GoblinForm';
import Header from './components/header/Header';
import { deleteGoblin, getGoblins } from './services/request';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goblinToDelete, setGoblinToDelete] = useState('');

  useEffect(() => {
    getGoblins().then((res) => {
      setGoblins(res);
      setLoading(false);
    });
  }, [goblinToDelete]);

  // console.log(goblins);

  const onDeleteGoblin = (e) => {
    e.preventDefault();
    deleteGoblin(goblinToDelete).then(() =>
      getGoblins().then((res) => setGoblins(res))
    );
  };

  console.log(goblinToDelete);

  return (
    <>
      <Header />
      <main>
        <GoblinForm setGoblins={setGoblins} />
        <section>
          <h2>Delete a Goblin</h2>
          <select onChange={(e) => setGoblinToDelete(e.target.value)}>
            <option value='default'>Pick a Goblin</option>
            {goblins.map((goblin) => (
              <option key={goblin.goblinId} value={goblin.goblinId}>
                {goblin.goblinId}: {goblin.goblinName}
              </option>
            ))}
          </select>
          <button onClick={onDeleteGoblin}>Delete Goblin</button>
        </section>
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
