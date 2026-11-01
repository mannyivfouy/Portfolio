import { ProjectDetailModel } from '../models/project-detail.model';

export const PROJECT_DETAILS: ProjectDetailModel[] = [
  {
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
        purpose: 'Frontend framework used to build the application interface.',
      },
      {
        name: 'TypeScript',
        purpose: 'Provides type safety and structured frontend development.',
      },
      {
        name: 'Tailwind CSS',
        purpose: 'Used to style the application interface and layouts.',
      },
      {
        name: 'Node.js',
        purpose: 'JavaScript runtime used to execute the backend application.',
      },
      {
        name: 'Express.js',
        purpose: 'Backend framework used to build REST APIs and handle HTTP requests.',
      },
      {
        name: 'MongoDB',
        purpose: 'Database used to store application data.',
      },
      {
        name: 'Mongoose',
        purpose: 'Object modeling library used to define schemas and interact with MongoDB.',
      },
      {
        name: 'Bakong KHQR',
        purpose: 'Integrated to generate KHQR codes and verify payment transactions.',
      },
      {
        name: 'Telegram Bot API',
        purpose: 'Used to send transaction notifications through Telegram.',
      },
    ],
    architecture: `
      flowchart TB
          A["Angular Frontend<br/>TypeScript + Tailwind CSS"]

          subgraph BACKEND["Node.js Backend"]
              direction TB
              B["Express REST API"]
              C["JWT Authentication<br/>Role & Permission Authorization"]
              D["Business Logic Services"]

              B --> C
              C --> D
          end

          E[("MongoDB")]

          subgraph EXTERNAL["External Services"]
              direction LR
              F["Bakong KHQR API"]
              G["Telegram Bot API"]
          end

          A --> B
          D <--> E
          D --> F
          D --> G

          classDef frontend fill:#18181b,stroke:#818cf8,color:#fafafa
          classDef backend fill:#18181b,stroke:#6366f1,color:#fafafa
          classDef database fill:#312e81,stroke:#818cf8,color:#fafafa
          classDef external fill:#18181b,stroke:#52525b,color:#fafafa

          class A frontend
          class B,C,D backend
          class E database
          class F,G external
      `,
    databaseDesign: `
erDiagram
    CATEGORY ||--o{ PRODUCT : categorizes
    SUPPLIER ||--o{ PRODUCT : supplies
    SUPPLIER ||--o{ PURCHASE : provides
    USER ||--o{ PURCHASE : creates

    PURCHASE ||--o{ PURCHASE_ITEM : contains
    PRODUCT ||--o{ PURCHASE_ITEM : included_in

    CUSTOMER o|--o{ SALE : associated_with
    USER ||--o{ SALE : creates

    SALE ||--o{ SALE_ITEM : contains
    PRODUCT ||--o{ SALE_ITEM : included_in

    ROLE ||--o{ USER : assigned_to
    ROLE ||--o{ ROLE_PERMISSION : has
    PERMISSION ||--o{ ROLE_PERMISSION : assigned_through

    CATEGORY {
        ObjectId _id
        string name
    }

    PRODUCT {
        ObjectId _id
        string name
        string sku
        number stockQty
        ObjectId categoryId
        ObjectId supplierId
    }

    SUPPLIER {
        ObjectId _id
        string name
        string phone
    }

    CUSTOMER {
        ObjectId _id
        string name
        string phone
    }

    USER {
        ObjectId _id
        string username
        string fullname
        ObjectId roleId
    }

    ROLE {
        ObjectId _id
        string name
    }

    PERMISSION {
        ObjectId _id
        string name
        string module
        string action
    }

    ROLE_PERMISSION {
        ObjectId _id
        ObjectId roleId
        ObjectId permissionId
    }

    PURCHASE {
        ObjectId _id
        string invoiceNo
        ObjectId supplierId
        ObjectId createdBy
        number total
    }

    PURCHASE_ITEM {
        ObjectId _id
        ObjectId purchaseId
        ObjectId productId
        number quantity
    }

    SALE {
        ObjectId _id
        string invoiceNo
        ObjectId customerId
        ObjectId createdBy
        string paymentStatus
        number total
    }

    SALE_ITEM {
        ObjectId _id
        ObjectId saleId
        ObjectId productId
        number quantity
    }
`,
    implementationHighlights: [
      'Implemented JWT-based authentication with bcrypt password verification and one-day token expiration to secure user access.',

      'Developed role-based and permission-based authorization to control access to different system modules and operations.',

      'Implemented product stock management where purchases increase stock quantities and completed sales decrease available inventory.',

      'Integrated Bakong KHQR to generate payment QR codes and verify transactions through the Bakong API using the transaction MD5.',

      'Implemented payment verification that checks the transaction status, expected amount, and currency before completing a sale.',

      'Integrated Telegram Bot API to automatically send sales transaction details after successful payment completion.',

      'Developed reusable backend services and REST API endpoints to separate business logic from request handling.',
    ],
    challenges: [],
    learnings: [
      'Gained practical experience developing a full-stack application using Angular, Node.js, Express.js, and MongoDB.',

      'Improved understanding of REST API development and communication between frontend and backend applications.',

      'Learned to implement JWT authentication, password hashing, role-based access control, and permission-based authorization.',

      'Strengthened database design skills by creating MongoDB schemas and managing relationships between different business entities.',

      'Gained experience integrating third-party services, including Bakong KHQR payment processing and Telegram notifications.',

      'Improved understanding of business workflows involving sales transactions, purchasing operations, and inventory management.',
    ],
    screenshots: [],
  },
];
