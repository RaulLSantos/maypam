import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Avaliacoes from './components/Avaliacoes';
import Galeria from './components/Galeria';
import Orcamento from './components/Orcamento';
import Localizacao from './components/Localizacao';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <Avaliacoes />
        <Galeria />
        <Orcamento />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
