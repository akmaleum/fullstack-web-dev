function TeamMember({ name, role, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.role}>{role}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    width: "180px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    margin: "8px 0 4px",
    fontSize: "1.1em",
  },
  role: {
    margin: 0,
    color: "#555",
    fontSize: "0.9em",
  },
};

export default TeamMember;
