import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: '3rem 2rem', minHeight: '60vh', background: '#f3f4f6' }}>
        <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1>Hello, welcome to my site!</h1>
          <p>This is my personal website hosted on GitHub Pages.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
