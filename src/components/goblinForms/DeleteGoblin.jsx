import React, { useState } from 'react';
import { useRequest } from '../../hooks/useRequest';
import Button from '../buttons/Button';
import styles from './DeleteGoblin.module.css';

const DeleteGoblin = ({ goblins, setGoblins }) => {
  const [goblinToDelete, setGoblinToDelete] = useState('');
  const [deletedGoblin, setDeletedGoblin] = useState(null);
  const { removeGoblin } = useRequest(setGoblins);

  const onDeleteGoblinSubmit = (e) => {
    e.preventDefault();
    removeGoblin(goblinToDelete, setDeletedGoblin);
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
      <Button text='Delete Goblin' />

      {deletedGoblin && <p>{deletedGoblin.goblinName} was deleted.</p>}
    </form>
  );
};

export default DeleteGoblin;
