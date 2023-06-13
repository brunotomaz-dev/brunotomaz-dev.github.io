import Gif from './projectsGifs';
import Image from './projectsImages';

const dataFrontEnd = [
  {
    nome: 'Projeto Sistema Solar',
    page: 'https://brunotomaz-dev.github.io/project-solar-system/',
    github: 'https://github.com/brunotomaz-dev/project-solar-system',
    tecnologias: ['CSS', 'Javascript', 'React'],
    detalhes: `Projeto utilizando React para criar um sistema solar.
      Usados conceitos básicos de React como: Componentes, Props.`,
    image: Image.Solar,
  },
  {
    nome: 'Projeto TrybeWallet',
    page: 'https://brunotomaz-dev.github.io/project-trybewallet/',
    github: 'https://github.com/brunotomaz-dev/project-trybewallet',
    tecnologias: ['React', 'Redux'],
    detalhes:
      `Usei o que aprendi sobre React e Redux.
      Foi usado o Redux para gerenciar o estado global da aplicação, que é
      uma carteira de controle de gastos. Ela permite converte moedas para Real
      (Foi usada uma API externa), adicionar e remover gastos,
      e ver o total gasto em Reais.`,
    image: Gif.Wallet,
    // gif: Gif.Wallet,
  },
  {
    nome: 'Projeto Trivia',
    page: 'https://brunotomaz-dev.github.io/project-trivia/',
    github: 'https://github.com/brunotomaz-dev/project-trivia',
    tecnologias: ['React', 'Redux'],
    detalhes: (
      `Criado um jogo de Trivia, onde coloquei em prática o que aprendi 
      sobre React e Redux, testes usando RTL, e Soft-Skills como comunicação, 
      metodologias ágeis, trabalho em grupo.`
    ),
  },
];

export default dataFrontEnd;
