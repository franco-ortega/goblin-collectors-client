import { useState } from 'react';
import Updating from '../updating/Updating';
import styles from './Goblin.module.css';
import GoblinEdit from './GoblinEdit';

const Goblin = ({
  displayId,
  goblinId,
  name,
  strength,
  storage,
  setGoblins
}) => {
  const [edit, setEdit] = useState(false);

  const [updating, setUpdating] = useState(false);

  const onGoblinClick = () => {
    setEdit(true);
  };

  return (
    <div className={styles.Goblin} onClick={onGoblinClick}>
      {!edit || updating ? (
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
        <GoblinEdit
          goblinId={goblinId}
          name={name}
          strength={strength}
          storage={storage}
          setGoblins={setGoblins}
          setEdit={setEdit}
          setUpdating={setUpdating}
        />
      )}
    </div>
  );
};

export default Goblin;
