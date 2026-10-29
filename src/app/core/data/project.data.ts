import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'pos-inventory-management-system',
    title: 'POS & Inventory Management System',
    description:
      'A full-stack system for managing products, inventory, sales, users, and role-based access with integrated Bakong/KHQR payments.',
    image: 'assets/images/projects/pos-inventory.png',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Bakong/KHQR'],
    frontendUrl: 'https://github.com/mannyivfouy/POS_UI_Angular',
    backendUrl: 'https://github.com/mannyivfouy/POS_API_Express',
    featured: true,
  },
  {
    slug: 'dev-learning-platform',
    title: 'Dev Learning Platform',
    description:
      'A learning platform where students can purchase courses, access lessons, track progress, and subscribe to recurring plans.',
    image: 'assets/images/projects/dev-learning-platform.png',
    technologies: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Stripe'],
    frontendUrl: 'https://github.com/mannyivfouy/Dev-Learning-Platform-Frontend',
    backendUrl: 'https://github.com/mannyivfouy/Dev-Learning-Platform-Backend',
    featured: true,
  },
  {
    slug: 'school-website',
    title: 'School Website',
    description:
      'A modern responsive school website focused on clear information architecture, clean interfaces, and a professional user experience.',
    image: 'assets/images/projects/school-website.png',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    frontendUrl: 'https://github.com/mannyivfouy/School_Website',
    featured: true,
  },
];
