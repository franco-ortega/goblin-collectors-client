import CreateGoblin from './CreateGoblin';
import DeleteGoblin from './DeleteGoblin';
import styles from './GoblinForm.module.css';

const GoblinForm = ({ goblins, setGoblins }) => {
  return (
    <section className={styles.GoblinForm}>
      <CreateGoblin setGoblins={setGoblins} />
      <hr />
      <DeleteGoblin goblins={goblins} setGoblins={setGoblins} />
    </section>
  );
};

export default GoblinForm;
