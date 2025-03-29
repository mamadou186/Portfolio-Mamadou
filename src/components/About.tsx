import "../styles/About.css";

const About = () => {
  const birthDate = new Date(2003, 10, 4); // Date de naissance (04/11/2003)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div id="ABOUT" className="min-vh-100 mb-5">
      <p>
        Bienvenue dans mon univers où la créativité fusionne avec la technologie. Passionné par l'innovation, je cherche constamment à repousser les limites du possible.
      </p>

      <p>
        Mon objectif est de devenir un développeur web ou logiciel. J'aspire à créer des solutions numériques qui ont un impact tangible et à évoluer dans un environnement en constante transformation.
      </p>

      <p>
        <i>"La technologie n'est qu'un outil, c'est l'humain qui l'optimise."</i> Cette citation guide mon parcours, où la rigueur technique et l'innovation se rencontrent pour donner naissance à des projets créatifs.
      </p>

      <p>
        À {age} ans, je suis toujours en quête de nouvelles compétences et de défis à relever, avec une forte volonté d'apprendre et de contribuer au développement du monde numérique.
      </p>

      <div className="skills-section">
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <div className="skills">
            <div className="skill-badge">Réactivité</div>
            <div className="skill-badge">Sens de la communication</div>
            <div className="skill-badge">Travail en équipe</div>
            <div className="skill-badge">Capacité d'adaptation</div>
            <div className="skill-badge">Rigoureux</div>
          </div>
        </div>

        <div className="skill-category mt-3">
          <h3>Hard Skills</h3>
          <div className="skills">
            <div className="skill-badge">Développement Web</div>
            <div className="skill-badge">Gestion de base de données</div>
            <div className="skill-badge">Méthodologie AGILE</div>
            <div className="skill-badge">Pratiques DevOps</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
