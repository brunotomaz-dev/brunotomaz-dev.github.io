import React from 'react';
import Header from '../components/Header';
import imageStacks from '../data/stacksImages';
import perfil from '../images/perfil.jpg';

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
      <li classList="arrayList" key={ habil }>{habil}</li>));
  };

  myStacks = () => {
    const arrayStacks = [
      imageStacks.Javascript,
      imageStacks.Typescript,
      imageStacks.Git,
    ];
    return arrayStacks.map((stack) => (
      <img
        className="imageList"
        src={ stack }
        key={ stack }
        alt={ stack }
      />));
  };

  render() {
    return (
      <div>
        <Header />
        <section className="presentation">
          <img className="perfil scale" src={ perfil } alt="Foto de Bruno" />
          <article className="myArticle">
            <h3>Quem sou?</h3>
            <p>
              Tenho 38 anos, sou brasileiro, casado e pai da pequena Chloe.
              {' '}
              <br />
              Sou natural de Santo André/SP e nos últimos 8 anos
              estou morando em Barretos/SP.
              {' '}
              <br />
              Sou dinâmico e aprendo rápido, principalmente o que
              é relacionado a tecnologia.
              {' '}
              <br />
              Sou um Desenvolvedor FullStack e no momento me dedico a aprender mais
              com a Trybe.
            </p>
            <div className="myHabilities">
              <h3>Habilidades</h3>
              <ul className="hability-list">
                {this.myHabilities()}
              </ul>
            </div>
          </article>
          <article className="stacksArticle">
            <h3>Principais Stacks</h3>
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
