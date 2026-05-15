import tese from '@/assets/tese.jpg';
import ourtube from '@/assets/ourtube.png';
import starwars from '@/assets/starwars.jpg';
import felixflix from '@/assets/felixflix.jpg';
import customware from '@/assets/customware.jpg';


export const projects = [
  {
    title: 'Ourtube',
    description: 'Um clone completo do YouTube com funcionalidades de vídeo, canais e inscrições.',
    image: ourtube,
    github: 'https://github.com/joaofelixx',
    demo: '#',
    tags: ['React', 'Node.js', 'Socket.io']
  },
  {
    title: 'Felixflix',
    description: 'Clone da Netflix focado em layout responsivo e consumo de API de filmes.',
    image: felixflix,
    github: 'https://github.com/joaofelixx',
    demo: '#',
    tags: ['React', 'Styled Components']
  },
  {
    title: 'Star Wars API',
    description: 'Explorador do universo Star Wars consumindo a SWAPI.',
    image: starwars,
    github: 'https://github.com/joaofelixx',
    demo: '#',
    tags: ['React', 'Context API']
  },
  {
    title: 'Custom Ware',
    description: 'E-commerce completo desenvolvido com PHP e MySQL.',
    image: customware,
    github: 'https://github.com/joaofelixx',
    demo: '#',
    tags: ['PHP', 'MySQL', 'Bootstrap']
  },
  {
    title: 'Tese Mobilidade',
    description: 'Sistema de transporte público com foco em acessibilidade e rotas.',
    image: tese,
    github: 'https://github.com/joaofelixx',
    demo: '#',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
];
