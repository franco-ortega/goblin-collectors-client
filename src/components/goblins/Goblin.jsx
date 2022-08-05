import { useState } from 'react';
import { getGoblins, updateGoblin } from '../../services/request';
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
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState(name);
  const [updateStrength, setUpdateStrength] = useState(strength);
  const [updateStorage, setUpdateStorage] = useState(storage);

  const [updating, setUpdating] = useState(false);

  const onGoblinClick = () => {
    setEdit(true);
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    console.log('edit submitted');

    setUpdating(true);

    updateGoblin(goblinId, {
      goblinName: updateName,
      strength: updateStrength,
      storage: updateStorage
    }).then(() =>
      getGoblins().then((res) => {
        setGoblins(res);
        setUpdating(false);
      })
    );

    setEdit(false);
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
        <>
          <form onSubmit={onEditSubmit}>
            <label htmlFor='name'>
              Name:{' '}
              <input
                type='text'
                id='name'
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
              />
            </label>

            <label htmlFor='strength'>
              Strength:{' '}
              <select
                id='strength'
                name='strength'
                value={updateStrength}
                onChange={(e) => setUpdateStrength(e.target.value)}
              >
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
                defaultChecked={updateStorage === 'small'}
                onChange={(e) => setUpdateStorage(e.target.value)}
              />
              <label htmlFor='small'>Small</label>
              <input
                type='radio'
                id='storage'
                name='storage'
                value='medium'
                defaultChecked={updateStorage === 'medium'}
                onChange={(e) => setUpdateStorage(e.target.value)}
              />
              <label htmlFor='medium'>Medium</label>
              <input
                type='radio'
                id='storage'
                name='storage'
                value='large'
                defaultChecked={updateStorage === 'large'}
                onChange={(e) => setUpdateStorage(e.target.value)}
              />
              <label htmlFor='large'>Large</label>
            </fieldset>
            <button>Edit Goblin</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Goblin;
