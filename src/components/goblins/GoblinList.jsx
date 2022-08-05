import Goblin from './Goblin';
import styles from './GoblinList.module.css';

const GoblinList = ({ goblins }) => {
  return (
    <ul className={styles.GoblinList}>
      {goblins.map((goblin, i) => (
        <li key={goblin.goblinId}>
          <Goblin
            displayId={i + 1}
            goblinId={goblin.goblinId}
            name={goblin.goblinName}
            strength={goblin.strength}
            storage={goblin.storage}
          />
        </li>
      ))}
    </ul>
  );
};

export default GoblinList;
