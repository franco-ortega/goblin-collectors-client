import { useState } from 'react';
import GoblinForms from './components/goblinForms/GoblinForms';
import GoblinList from './components/goblins/GoblinList';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const { loading } = useFetch(setGoblins);

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
