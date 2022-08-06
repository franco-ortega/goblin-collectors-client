import styles from './Goblin.module.css';

const Goblin = ({ displayId, name, strength, storage, setUpdate }) => {
  const onGoblinClick = () => {
    setUpdate(true);
  };

  return (
    <button className={styles.Goblin} onClick={onGoblinClick}>
      <h3>
        #{displayId}: {name}
      </h3>
      <p>Strength: {strength}</p>
      <p>Storage: {storage}</p>
    </button>
  );
};

export default Goblin;
