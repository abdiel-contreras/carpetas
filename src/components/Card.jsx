const Card = ({ title, desc }) => (
  <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default Card;
