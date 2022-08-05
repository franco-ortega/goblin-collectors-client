import CreateGoblin from './CreateGoblin';
import DeleteGoblin from './DeleteGoblin';
import styles from './GoblinForms.module.css';

const GoblinForms = ({ goblins, setGoblins }) => {
  return (
    <section className={styles.GoblinForms}>
      <CreateGoblin setGoblins={setGoblins} />
      <hr />
      <DeleteGoblin goblins={goblins} setGoblins={setGoblins} />
    </section>
  );
};

export default GoblinForms;
