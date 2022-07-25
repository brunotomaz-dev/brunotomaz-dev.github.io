import React from 'react';
import Header from '../components/Header';
import perfil from '../images/perfil.jpg';

class Home extends React.Component {
  myHabilities = () => {
    const arrayHabilities = [
      'Dinâmico',
      'Autodidata',
      'Conciliador',
      'Paciente',
      'Observador',
      'Orador Público',
      'Futuro Programador',
    ];
    return arrayHabilities.map((habil) => (
      <li classList="arrayList" key={ habil }>{habil}</li>));
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
              Tenho 37 anos, sou brasileiro, casado e pai da pequena Chloe.
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
              No momento me dedico a aprender com a Trybe sobre desenvolvimento web.
            </p>
            <div className="myHabilities">
              <h3>Habilidades</h3>
              <ul className="hability-list">
                {this.myHabilities()}
              </ul>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Home;
