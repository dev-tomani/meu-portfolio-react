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
            Sou um profissional de 29 anos, estudante de Sistemas para Internet, iniciei esta nova fase da vida, buscando  uma fonte de renda remota ou híbrida que me possa dar estabilidade, crescimento a longo prazo e qualidade de vida. <br/>
            Atualmente, tento conciliar o trabalho, com os estudos, focando os meus conhecimentos na transição de carreira para a área de Tecnologia.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
