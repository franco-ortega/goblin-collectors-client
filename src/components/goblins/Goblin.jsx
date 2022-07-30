import styles from './Goblin.module.css';

const Goblin = ({ id, name, strength, storage }) => {
  console.log(name);
  return (
    <div className={styles.Goblin}>
      <h3>
        Goblin #{id}: {name}
      </h3>
      <p>Strength: {strength}</p>
      <p>Storage: {storage}</p>
    </div>
  );
};

export default Goblin;
