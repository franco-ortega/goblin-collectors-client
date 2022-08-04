const GoblinForm = () => {
  return (
    <form>
      <label htmlFor='name'>
        Name:
        <input type='text' id='name' name='name' />
      </label>
      <label htmlFor='strength'>
        Strength:
        <select id='strength' name='strength'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      <label htmlFor='storage'>
        Storage:
        <input type='radio' id='storage' name='storage' value='small' />
        <input type='radio' id='storage' name='storage' value='medium' />
        <input type='radio' id='storage' name='storage' value='large' />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default GoblinForm;
