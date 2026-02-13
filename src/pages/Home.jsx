import Card from '../components/Card';

const Home = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Organización de Carpetas</h1>
      <p>Este proyecto cumple con la estructura de React.</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card title="Carpeta /pages" desc="Contiene las vistas principales." />
        <Card title="Carpeta /components" desc="Contiene componentes reutilizables." />
      </div>
    </div>
  );
};

export default Home;
