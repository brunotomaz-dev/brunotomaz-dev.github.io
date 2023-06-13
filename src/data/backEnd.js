import Images from './projectsImages';

const dataBackEnd = [
  {
    nome: 'Projeto TFC - Trybe Futebol Clube',
    page: 'https://tfc-frontend-production-b912.up.railway.app/',
    github: 'https://github.com/brunotomaz-dev/TFC-Trybe-Futebol-Clube',
    tecnologias: ['NodeJS', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Typescript'],
    detalhes:
      `Projeto desenvolvido com uma tabela com a classificação dos clubes
    e informações/edições de partidas. Focado no back-end, foi construída uma API.
    Para edição de partidas é necessário login, protegido por um token JWT e
    criptografia com bcrypt.`,
    image: Images.TFC,
  },
  {
    nome: 'Projeto Delivery App',
    page: 'https://front-end-production-4154.up.railway.app/',
    github: 'https://github.com/brunotomaz-dev/project-delivery-app',
    tecnologias: ['NodeJS', 'Express', 'MySQL', 'Sequelize', 'React', 'Javascript'],
    detalhes:
      `Projeto Full-stack, de um app de Delivery desenvolvido em grupo.
      Foi utilizado o banco de dados MySQL, com o ORM Sequelize.
      O back-end foi desenvolvido com NodeJS e Express. Para criar um token foi
      utilizado o JWT e para criptografar a senha foi utilizado o MD5.
      O front-end foi desenvolvido com React.`,
    image: Images.AppDelivery,
  },
];

export default dataBackEnd;
