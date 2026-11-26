import { ProjectDetailModel } from '../models/project-detail.model';

export const PROJECT_DETAILS: ProjectDetailModel[] = [
  {
    title: 'POS & Inventory Management System',
    slug: 'pos-inventory-management-system',
    overview:
      'A full-stack Point of Sale and Inventory Management System independently developed to streamline daily business operations. It centralizes product management, inventory tracking, purchasing, sales transactions, customer and supplier management, and digital payment processing.',
    purpose:
      'The purpose of this project was to develop a centralized business management solution that connects point-of-sale operations with inventory and purchasing workflows. It helps organize business data, monitor stock levels, manage transactions, and support digital payments while providing controlled access for different staff roles.',
    features: [
      {
        title: 'Authentication & Authorization',
        description:
          'Provides secure user authentication using JWT and controls access through role-based permissions.',
      },
      {
        title: 'Product & Category Management',
        description:
          'Allows authorized users to create, manage, update, and organize products and their categories.',
      },
      {
        title: 'Inventory Management',
        description:
          'Tracks product stock quantities and supports stock updates through purchasing and sales operations.',
      },
      {
        title: 'Sales & Transactions',
        description:
          'Supports sales transactions, invoice generation, payment processing, and sales record management.',
      },
      {
        title: 'Purchase Management',
        description:
          'Manages supplier purchases, purchase items, costs, and automatic stock increases after purchases.',
      },
      {
        title: 'Customer & Supplier Management',
        description:
          'Maintains customer and supplier information to support sales and purchasing workflows.',
      },
      {
        title: 'Bakong KHQR Integration',
        description:
          'Generates KHQR payment codes and verifies payment status through the Bakong API.',
      },
      {
        title: 'Image Upload',
        description:
          'Supports image uploads for application records such as products and user avatars.',
      },
      {
        title: 'Telegram Notifications',
        description:
          'Sends Telegram notifications containing transaction details after successful sale completion.',
      },
    ],
    technologies: [
      {
        name: 'Angular',
        icon: 'assets/icons/technologies/angular.svg',
      },
      {
        name: 'TypeScript',
        icon: 'assets/icons/technologies/typescript.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'assets/icons/technologies/tailwind.svg',
      },
      {
        name: 'Node.js',
        icon: 'assets/icons/technologies/nodejs.svg',
      },
      {
        name: 'Express.js',
        icon: 'assets/icons/technologies/express.svg',
      },
      {
        name: 'MongoDB',
        icon: 'assets/icons/technologies/mongodb.svg',
      },
      {
        name: 'Mongoose',
        icon: 'assets/icons/technologies/mongoose.svg',
      },
      {
        name: 'Bakong KHQR',
        icon: 'assets/icons/technologies/bakong.png',
      },
      {
        name: 'Telegram Bot API',
        icon: 'assets/icons/technologies/telegram.svg',
      },
    ],
    implementationHighlights: [
      'Implemented JWT-based authentication with bcrypt password verification and one-day token expiration to secure user access.',

      'Developed role-based and permission-based authorization to control access to different system modules and operations.',

      'Implemented product stock management where purchases increase stock quantities and completed sales decrease available inventory.',

      'Integrated Bakong KHQR to generate payment QR codes and verify transactions through the Bakong API using the transaction MD5.',

      'Implemented payment verification that checks the transaction status, expected amount, and currency before completing a sale.',

      'Integrated Telegram Bot API to automatically send sales transaction details after successful payment completion.',

      'Developed reusable backend services and REST API endpoints to separate business logic from request handling.',
    ],
    learnings: [
      'Gained practical experience developing a full-stack application using Angular, Node.js, Express.js, and MongoDB.',

      'Improved understanding of REST API development and communication between frontend and backend applications.',

      'Learned to implement JWT authentication, password hashing, role-based access control, and permission-based authorization.',

      'Strengthened database design skills by creating MongoDB schemas and managing relationships between different business entities.',

      'Gained experience integrating third-party services, including Bakong KHQR payment processing and Telegram notifications.',

      'Improved understanding of business workflows involving sales transactions, purchasing operations, and inventory management.',
    ],
    screenshots: [
      'assets/images/projects/pos/login-page.png',
      'assets/images/projects/pos/pos-inventory.png',
    ],
  },
  {
    title: 'School Website',
    slug: 'school-website',
    overview:
      'A modern and responsive school website designed to present school information through a clean interface, intuitive navigation, and well-organized content.',
    purpose:
      'To provide an accessible and user-friendly platform where visitors can explore school information, discover educational programs, and navigate content through a responsive and multilingual interface.',
    features: [
      {
        title: 'Responsive Design',
        description:
          'Provides a consistent browsing experience across desktop, tablet, and mobile devices.',
      },
      {
        title: 'Multilingual Support',
        description:
          'Allows visitors to switch between supported languages to access school information more conveniently.',
      },
      {
        title: 'Reusable UI Components',
        description:
          'Uses reusable Angular components to maintain consistency and simplify frontend development.',
      },
      {
        title: 'Intuitive Navigation',
        description:
          'Organizes website sections to help visitors easily find relevant school information.',
      },
      {
        title: 'Organized School Information',
        description:
          'Presents school details and educational information in a clear and structured layout.',
      },
    ],
    technologies: [
      {
        name: 'Angular',
        icon: 'assets/icons/technologies/angular.svg',
      },
      {
        name: 'TypeScript',
        icon: 'assets/icons/technologies/typescript.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'assets/icons/technologies/tailwind.svg',
      },
    ],
    learnings: [
      'Building reusable components with Angular.',
      'Structuring and organizing a frontend application.',
      'Creating responsive layouts using Tailwind CSS.',
      'Implementing multilingual user interfaces.',
      'Maintaining consistent UI design across different pages.',
    ],
    screenshots: [
      'assets/images/projects/school-website/home.png',
      'assets/images/projects/school-website/contact.png',
      'assets/images/projects/school-website/about.png',
      'assets/images/projects/school-website/home2.png',
      'assets/images/projects/school-website/academics.png',
      'assets/images/projects/school-website/academic-detail.png',
    ],
  },
];
