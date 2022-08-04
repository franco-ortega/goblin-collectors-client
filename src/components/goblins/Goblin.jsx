import styles from './Goblin.module.css';

const Goblin = ({ id, name, strength, storage }) => {
  return (
    <div className={styles.Goblin}>
      <h3>
        #{id}: {name}
      </h3>
      <p>Strength: {strength}</p>
      <p>Storage: {storage}</p>
    </div>
  );
};

export default Goblin;
