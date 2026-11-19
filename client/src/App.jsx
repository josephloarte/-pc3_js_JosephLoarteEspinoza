import { useState, useEffect } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [universidades, setUniversidades] = useState([]);

  useEffect(() => {
    fetch(`/api/universidades?q=${encodeURIComponent(busqueda)}`)
      .then(res => res.json())
      .then(data => setUniversidades(data));
  }, [busqueda]);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '650px', margin: '40px auto', padding: '0 20px' }}>
      <h2>Buscador de Universidades (Perú)</h2>
      <input
        type="text"
        placeholder="Escribe el nombre de una universidad..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px', boxSizing: 'border-box' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {universidades.map((u, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
            <span>{u.name}</span>
            <a href={u.web_pages[0]} target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {u.domains[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;