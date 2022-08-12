import { useState } from 'react';
import GoblinForms from './components/goblinForms/GoblinForms';
import GoblinList from './components/goblins/GoblinList';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import { useRequest } from './hooks/useRequest';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const { loading } = useRequest(setGoblins);

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
