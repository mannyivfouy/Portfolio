import { TechCategory } from '../models/tech-stack.model';

export const TECH_STACK: TechCategory[] = [
  {
    title: 'Frontend',
    technologies: [
      {
        name: 'HTML',
        icon: 'assets/icons/technologies/html5.svg'
      },
      {
        name: 'CSS',
        icon: 'assets/icons/technologies/css3.svg'
      },
      {
        name: 'JavaScript',
        icon: 'assets/icons/technologies/javascript.svg'
      },
      {
        name: 'Tailwind',
        icon: 'assets/icons/technologies/tailwind.svg'
      },
      {
        name: 'Angular',
        icon: 'assets/icons/technologies/angular.svg'
      },
      {
        name: 'TypeScript',
        icon: 'assets/icons/technologies/typescript.svg'
      },
    ]
  },
  {
    title: 'Backend',
    technologies: [
      {
        name: 'Node.js',
        icon: 'assets/icons/technologies/nodejs.svg'
      },
      {
        name: 'Express',
        icon: 'assets/icons/technologies/express.svg'
      },
      {
        name: 'NestJS',
        icon: 'assets/icons/technologies/nestjs.svg'
      },
      {
        name: 'Python',
        icon: 'assets/icons/technologies/python.svg'
      },
      {
        name: 'Flask',
        icon: 'assets/icons/technologies/flask.svg'
      }
    ]
  },
  {
    title: 'Database',
    technologies: [
      {
        name: 'MySQL',
        icon: 'assets/icons/technologies/mysql.svg'
      },
      {
        name: 'MongoDB',
        icon: 'assets/icons/technologies/mongodb.svg'
      },
      {
        name: 'PostgreSQL',
        icon: 'assets/icons/technologies/postgres.svg'
      }
    ]
  },
  {
    title: 'Tools',
    technologies: [
      {
        name: 'Git',
        icon: 'assets/icons/technologies/git.svg'
      },
      {
        name: 'GitHub',
        icon: 'assets/icons/technologies/github.svg'
      }
    ]
  }
];
