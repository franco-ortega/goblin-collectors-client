import { useEffect, useState } from 'react';
import GoblinForms from './components/goblinForms/GoblinForms';
import GoblinList from './components/goblins/GoblinList';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import { getGoblins, getGoblins2 } from './services/request';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGoblins2().then((res) => {
      setGoblins(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <GoblinForms goblins={goblins} setGoblins={setGoblins} />
        {loading ? (
          <Loading />
        ) : goblins.length ? (
          <GoblinList goblins={goblins} setGoblins={setGoblins} />
        ) : (
          <p>'No goblins. So sad. :('</p>
        )}
      </main>
    </>
  );
};

export default App;
