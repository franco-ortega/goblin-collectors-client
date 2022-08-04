import { useState } from 'react';
import { deleteGoblin, getGoblins, postGoblin } from '../../services/request';
import styles from './GoblinForm.module.css';

const GoblinForm = ({ goblins, setGoblins }) => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [storage, setStorage] = useState('');

  const [goblinToDelete, setGoblinToDelete] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    postGoblin({
      goblinName: name,
      strength,
      storage
    }).then(() => getGoblins().then((res) => setGoblins(res)));

    setName('');
    setStrength('');
    setStorage('small');
  };

  const onDeleteGoblin = (e) => {
    e.preventDefault();
    deleteGoblin(goblinToDelete).then(() =>
      getGoblins().then((res) => setGoblins(res))
    );
  };

  console.log(goblinToDelete);

  return (
    <section className={styles.GoblinForm}>
      <form onSubmit={onFormSubmit} id='create'>
        <h2>Create a Goblin</h2>
        <label htmlFor='name'>
          Name:{' '}
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='strength'>
          Strength:{' '}
          <select
            id='strength'
            name='strength'
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
          >
            <option value=''>Pick Your Strength</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <fieldset form='goblin'>
          <legend>Storage</legend>
          <input
            type='radio'
            id='storage'
            name='storage'
            value='small'
            onChange={(e) => setStorage(e.target.value)}
          />
          <label htmlFor='small'>Small</label>
          <input
            type='radio'
            id='storage'
            name='storage'
            value='medium'
            onChange={(e) => setStorage(e.target.value)}
          />
          <label htmlFor='medium'>Medium</label>
          <input
            type='radio'
            id='storage'
            name='storage'
            value='large'
            onChange={(e) => setStorage(e.target.value)}
          />
          <label htmlFor='large'>Large</label>
        </fieldset>
        <button>Create Goblin</button>
      </form>
      <hr />
      <form id='delete'>
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
    </section>
  );
};

export default GoblinForm;
