import { useEffect, useState } from 'react';
import GoblinForm from './components/goblins/GoblinForm';
import GoblinList from './components/goblins/GoblinList';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
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

  return (
    <>
      <Header />
      <main>
        <GoblinForm goblins={goblins} setGoblins={setGoblins} />
        {loading ? (
          <Loading />
        ) : goblins.length ? (
          <GoblinList goblins={goblins} setGoblins={setGoblins} />
        ) : (
          'No goblins. So sad. :('
        )}
      </main>
    </>
  );
};

export default App;
