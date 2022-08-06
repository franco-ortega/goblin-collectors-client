import { useState } from 'react';
import UpdateGoblin from '../goblinForms/UpdateGoblin';
import Updating from '../updating/Updating';
import Goblin from './Goblin';

const GoblinContainer = ({
  displayId,
  goblinId,
  name,
  strength,
  storage,
  setGoblins
}) => {
  const [update, setUpdate] = useState(false);
  const [updating, setUpdating] = useState(false);

  return (
    <div>
      {!update || updating ? (
        updating ? (
          <Updating />
        ) : (
          <Goblin
            displayId={displayId}
            name={name}
            strength={strength}
            storage={storage}
            setUpdate={setUpdate}
          />
        )
      ) : (
        <UpdateGoblin
          goblinId={goblinId}
          name={name}
          strength={strength}
          storage={storage}
          setGoblins={setGoblins}
          setUpdate={setUpdate}
          setUpdating={setUpdating}
        />
      )}
    </div>
  );
};

export default GoblinContainer;
