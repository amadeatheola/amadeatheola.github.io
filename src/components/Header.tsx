export default function Header() {
  return (
    <header style={{ background: '#111827', color: '#fff', padding: '1rem 2rem' }}>
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>Amadea</div>

        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}