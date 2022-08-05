import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Button from '../buttons/Button';
import styles from './CreateGoblin.module.css';

const CreateGoblin = ({ setGoblins }) => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [storage, setStorage] = useState('');
  const { addGoblin } = useFetch(setGoblins);

  const onCreateGoblinSubmit = (e) => {
    e.preventDefault();

    addGoblin({
      goblinName: name,
      strength,
      storage
    });

    setName('');
    setStrength('');
    setStorage('small');
  };

  return (
    <form
      className={styles.CreateGoblin}
      onSubmit={onCreateGoblinSubmit}
      id='create'
    >
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
          id='small'
          name='storage'
          value='small'
          onChange={(e) => setStorage(e.target.value)}
        />
        <label htmlFor='small'>Small</label>
        <input
          type='radio'
          id='medium'
          name='storage'
          value='medium'
          onChange={(e) => setStorage(e.target.value)}
        />
        <label htmlFor='medium'>Medium</label>
        <input
          type='radio'
          id='large'
          name='storage'
          value='large'
          onChange={(e) => setStorage(e.target.value)}
        />
        <label htmlFor='large'>Large</label>
      </fieldset>
      <Button text='Create Goblin' />
      <p>Click on a goblin to edit it.</p>
    </form>
  );
};

export default CreateGoblin;
