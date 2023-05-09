import React from 'react';
import Header from '../components/Header';
import imageStacks from '../data/stacksImages';

class Home extends React.Component {
  myHabilities = () => {
    const arrayHabilities = [
      'Dinâmico',
      'Autodidata',
      'Conciliador',
      'Paciente',
      'Observador',
      'Liderança',
      'Orador Público',
    ];
    return arrayHabilities.map((habil) => (
      <li className="arrayList" key={ habil }>{habil}</li>));
  };

  myStacks = () => {
    const arrayStacks = [
      'Git',
      'Docker',
      'Eslint',
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'React',
      'NodeJS',
      'ExpressJS',
      'MySQL',
      'Sequelize',
      'MongoDB',
      'Mongoose',
    ];
    return arrayStacks.map((stack) => (
      <div key={ stack } className="stackCard">
        <img
          className="imageList"
          src={ imageStacks[stack] }
          key={ stack }
          alt={ stack }
        />
        {' '}
        {stack}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Header />
        <section className="presentation">
          <article className="myArticle">
            <h3>Quem sou?</h3>
            <p>
              Tenho 38 anos, sou brasileiro, casado e pai da pequena Chloe.
              <br />
              Sou natural de Santo André/SP e atualmente moro em Barretos/SP.
              <br />
              Sou dinâmico e aprendo rápido, apaixonado por tecnologia desde pequeno
              e agora estou em busca de uma oportunidade de trabalho.
              <br />
              Sou um Desenvolvedor FullStack e possuo mas de 20 projetos feitos em
              grupo e individuais, tanto em Front-End quanto em Back-End.
            </p>
            <div className="myHabilities">
              <h3>Características</h3>
              <ul className="hability-list">
                {this.myHabilities()}
              </ul>
            </div>
          </article>
          <article className="stacksArticle">
            <h3>Principais Stacks / Ferramentas</h3>
            <section className="stacks">
              {this.myStacks()}
            </section>

          </article>
        </section>
      </div>
    );
  }
}

export default Home;
