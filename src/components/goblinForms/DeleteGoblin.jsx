import React, { useState } from 'react';
import {
  deleteGoblin,
  deleteGoblin2,
  getGoblins,
  getGoblins2
} from '../../services/request';
import styles from './DeleteGoblin.module.css';

const DeleteGoblin = ({ goblins, setGoblins }) => {
  const [goblinToDelete, setGoblinToDelete] = useState('');
  const [deletedGoblin, setDeletedGoblin] = useState(null);

  const onDeleteGoblinSubmit = (e) => {
    e.preventDefault();
    deleteGoblin2(goblinToDelete).then((response) => {
      console.log('RESPONSE: ', response);
      setDeletedGoblin(response);
      getGoblins2().then((res) => setGoblins(res));
    });
  };

  return (
    <form
      className={styles.DeleteGoblin}
      id='delete'
      onSubmit={onDeleteGoblinSubmit}
    >
      <h2>Delete a Goblin</h2>
      <select onChange={(e) => setGoblinToDelete(e.target.value)}>
        <option value='default'>Pick a Goblin</option>
        {goblins.map((goblin, i) => (
          <option key={goblin.goblinId} value={goblin.goblinId}>
            {i + 1}: {goblin.goblinName}
          </option>
        ))}
      </select>
      <button>Delete Goblin</button>

      {deletedGoblin && <p>{deletedGoblin.goblinName} was deleted.</p>}
    </form>
  );
};

export default DeleteGoblin;
