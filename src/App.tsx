import Footer from './components/Footer';
import LiveClock, { HourlyImage } from './components/temporal';
import Frame, {WindowFrame} from './components/Frame';

export default function App() {
  return (
    <div className="page">
      <main className="site-main" style={{ padding: '3rem 2rem', minHeight: '60vh', background: '#f3f4f6' }}>
        <section className="shelf">
          <p>tis still a wip</p>
          <WindowFrame>
            <HourlyImage/>
          </WindowFrame>
        </section>
      </main>

      <Footer />
    </div>
  );
}
