import perfil2 from '../img/perfil2.jpeg';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="section-title">
        <h2 className="accent-text">SOBRE MIM</h2>
      </div>
      
      <div className="about-row">
        <div className="about-img">
          <img src={perfil2} alt="Foto Sobre Mim" />
        </div>
        <div className="about-text">
          <h3 style={{ textAlign: 'center' }}>
            Comecei minha vida, fiz um curso básico de informática, mas foi na musica que eu me achei, hoje sou músico e produtor musical.<br /> 
            Mas sei que devemos evoluir e aceitei o desafio!<br /> 
            Estou tentando o meu primeiro curso superior na area da Tecnologia, pois a mesma move o mundo!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;