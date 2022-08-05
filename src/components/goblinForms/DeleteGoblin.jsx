import React, { useState } from 'react';
import { deleteGoblin, getGoblins } from '../../services/request';
import styles from './DeleteGoblin.module.css';

const DeleteGoblin = ({ goblins, setGoblins }) => {
  const [goblinToDelete, setGoblinToDelete] = useState('');

  const onDeleteGoblin = (e) => {
    e.preventDefault();
    deleteGoblin(goblinToDelete).then(() =>
      getGoblins().then((res) => setGoblins(res))
    );
  };

  return (
    <form className={styles.DeleteGoblin} id='delete'>
      <h2>Delete a Goblin</h2>
      <select onChange={(e) => setGoblinToDelete(e.target.value)}>
        <option value='default'>Pick a Goblin</option>
        {goblins.map((goblin, i) => (
          <option key={goblin.goblinId} value={goblin.goblinId}>
            {i + 1}: {goblin.goblinName}
          </option>
        ))}
      </select>
      <button onClick={onDeleteGoblin}>Delete Goblin</button>
    </form>
  );
};

export default DeleteGoblin;
