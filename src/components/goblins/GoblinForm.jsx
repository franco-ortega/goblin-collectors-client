import { useState } from 'react';
import { postGoblin } from '../../services/request';

const GoblinForm = () => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [storage, setStorage] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    postGoblin({
      goblinName: name,
      strength,
      storage
    });

    setName('');
    setStrength('');
    setStorage('small');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='name'>
        Name:
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor='strength'>
        Strength:
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
      Storage:
      <label htmlFor='small'>
        Small
        <input
          type='radio'
          id='storage'
          name='storage'
          value='small'
          onChange={(e) => setStorage(e.target.value)}
        />
      </label>
      <label htmlFor='medium'>
        Medium
        <input
          type='radio'
          id='storage'
          name='storage'
          value='medium'
          onChange={(e) => setStorage(e.target.value)}
        />
      </label>
      <label htmlFor='large'>
        Large
        <input
          type='radio'
          id='storage'
          name='storage'
          value='large'
          onChange={(e) => setStorage(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default GoblinForm;
