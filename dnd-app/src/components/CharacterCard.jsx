export default function CharacterCard({ character }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{character.name}</h2>
      <p><strong>Class:</strong> {character.className}</p>
      <p><strong>Level:</strong> {character.level}</p>
      <p><strong>AC:</strong> {character.ac}</p>
      <p><strong>Initiative:</strong> {character.initiative}</p>
      <p><strong>Speed:</strong> {character.speed}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
  },
  name: {
    marginTop: 0,
    marginBottom: "12px",
  },
};