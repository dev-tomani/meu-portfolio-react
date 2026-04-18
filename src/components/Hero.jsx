import perfil1 from '../img/perfil1.jpeg';
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="accent-text">Olá, eu sou</p>
        <h1>Anderson Araujo Rodrigues da Silva</h1>
        <h2 className="subtitle">Em transição para a area Tech</h2>
        <a href="#contato" className="btn-primary">Contrate-me</a>
      </div>
      <div className="hero-image">
        <img src={perfil1} alt="Foto de Perfil" />
      </div>
    </section>
  );
};

export default Hero;