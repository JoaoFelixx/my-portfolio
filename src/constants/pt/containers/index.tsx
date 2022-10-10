import { Skills } from 'interfaces';
import { RiReactjsFill } from 'react-icons/ri';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiGit,
  SiJest,
  SiMysql, 
  SiRedux,
  SiRedis,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiFastify,
  SiCypress,
  SiSequelize,
  SiNextdotjs,
  SiBootstrap,
  SiAntdesign,
  SiMaterialui,
  SiPostgresql,
  SiJavascript, 
  SiTypescript,
  SiStyledcomponents,
} from 'react-icons/si';

const containers: Skills = {
  skills: [{
    category: 'front-end',
    color: '#ff5100',
    description: 'Linguagem de marcação de hipertexto JS',
    Icon: FaHtml5,
    name: 'HTML'
  },{
    category: 'front-end',
    color: '#0051ff',
    description: 'Folha de estilo JS',
    Icon: FaCss3Alt,
    name: 'CSS'
  },{
    category: 'front-end',
    color: '#FF0',
    description: 'Linguagem de programação',
    Icon: SiJavascript,
    name: 'Javascript'
  },{
    category: 'front-end',
    color: '#ae00ff',
    description: 'Framework web',
    Icon: SiBootstrap,
    name: 'Bootstrap'
  },{
    category: 'front-end',
    color: '#61DAFB',
    description: 'Biblioteca JS',
    Icon: RiReactjsFill,
    name: 'ReactJS'
  },{
    category: 'front-end',
    color: '#b3ff00',
    description: 'Biblioteca ReactJS',
    Icon: SiStyledcomponents,
    name: 'Styled'
  },{
    category: 'front-end',
    color: '#c300ff',
    description: 'Biblioteca JS',
    Icon: SiRedux,
    name: 'Redux'
  },{
    category: 'front-end',
    color: '#095BF2',
    description: 'Ant Design',
    Icon: SiAntdesign,
    name: 'Ant D.'
  },{
    category: 'front-end',
    color: '#0059ff',
    description: 'Biblioteca ReactJS',
    Icon: SiMaterialui,
    name: 'Material'
  },{
    category: 'front-end',
    color: '#000000',
    description: 'Framework ReactJS',
    Icon: SiNextdotjs,
    name: 'NextJS'
  },{
    category: 'back-end',
    color: '#00ff00be',
    description: 'Run time JS',
    Icon: FaNodeJs,
    name: 'NodeJS'
  },{
    category: 'back-end',
    color: '#FFF',
    description: 'Framework NodeJS',
    Icon: SiExpress,
    name: 'ExpressJS'
  },{
    category: 'back-end',
    color: '#3B76C3',
    description: 'ORM JS',
    Icon: SiSequelize,
    name: 'Sequelize'
  },{
    category: 'back-end',
    color: '#000',
    description: 'Framework NodeJS',
    Icon: SiFastify,
    name: 'Fastify'
  },{
    category: 'DBs',
    color: '#0099ff',
    description: 'Banco de dados relacional',
    Icon: SiMysql,
    name: 'MySQL'
  },{
    category: 'tools',
    color: '#3178C6',
    description: 'Linguagem de programação',
    Icon: SiTypescript,
    name: 'Typescript'
  },{
    category: 'back-end',
    color: '#ff0040',
    description: 'Framework NodeJS',
    Icon: SiNestjs,
    name: 'NesttJS'
  },{
    category: 'DBs',
    color: '#00b409',
    description: 'Banco de dados não relacional',
    Icon: SiMongodb,
    name: 'Mongo DB'
  },{
    category: 'DBs',
    color: '#0099ff',
    description: 'Banco de dados relacional',
    Icon: SiPostgresql,
    name: 'Postgres'
  },{
    category: 'DBs',
    color: '#A32422',
    description: 'Banco de dados em memória',
    Icon: SiRedis,
    name: 'Redis'
  },{
    category: 'tools',
    color: '#ff9100',
    description: 'Sistema de controle de versões',
    Icon: SiGit,
    name: 'Git'
  },{
    category: 'testing',
    color: '#e20b28',
    description: 'Estrutura de teste JS',
    Icon: SiJest,
    name: 'Jest'
  },{
    category: 'testing',
    color: '#00BC7F',
    description: 'Framework de testes',
    Icon: SiCypress,
    name: 'Cypress'
  }]
}

export default containers;