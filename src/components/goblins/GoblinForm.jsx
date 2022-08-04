import { useState } from 'react';

const GoblinForm = () => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [storage, setStorage] = useState('');

  return (
    <form>
      <label htmlFor='name'>
        Name:
        <input
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor='strength'>
        Strength:
        <select
          id='strength'
          name='strength'
          onChange={(e) => setStrength(e.target.value)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      <label htmlFor='storage'>
        Storage:
        <input
          type='radio'
          id='storage'
          name='storage'
          value='small'
          onChange={(e) => setStorage(e.target.value)}
        />
        <input
          type='radio'
          id='storage'
          name='storage'
          value='medium'
          onChange={(e) => setStorage(e.target.value)}
        />
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
