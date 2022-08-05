import { useState } from 'react';
import UpdateGoblin from '../goblinForms/UpdateGoblin';
import Updating from '../updating/Updating';
import styles from './Goblin.module.css';

const Goblin = ({
  displayId,
  goblinId,
  name,
  strength,
  storage,
  setGoblins
}) => {
  const [update, setUpdate] = useState(false);
  const [updating, setUpdating] = useState(false);

  const onGoblinClick = () => {
    setUpdate(true);
  };

  return (
    <div className={styles.Goblin} onClick={onGoblinClick}>
      {!update || updating ? (
        updating ? (
          <Updating />
        ) : (
          <>
            <h3>
              #{displayId}: {name}
            </h3>
            <p>Strength: {strength}</p>
            <p>Storage: {storage}</p>
          </>
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

export default Goblin;
