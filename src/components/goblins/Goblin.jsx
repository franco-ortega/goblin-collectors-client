import React from 'react';

const Goblin = ({ id, name, strength, storage }) => {
  return (
    <div>
      <h3>
        Goblin #{id}: {name}
      </h3>
      <p>Strength: {strength}</p>
      <p>Storage: {storage}</p>
    </div>
  );
};

export default Goblin;
