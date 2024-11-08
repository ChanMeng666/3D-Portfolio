import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  aws,
  nextjs,
  icon1,
  icon2,
  icon3,
  CORDE,
  AgrihireSolutions,
  SwimmingClub,
  MathematicsTeacher,
  css,
  figma,
  html,
  python,
  githubREADME,
  EastCoastAnglersClub,
  swimmingClub,
  agrihire_solutions_system,
  hobby_tidying,
  hobby_programming,
  hobby_hiking,
  hobby_travelling,
  hobby_snorkelling,
  RosaParks,
  IndraNooyi,
  MichelleObama,
  MinimalistGoodPost,
  JourneyOfReincarnation2,
  portfolio,
  CORDE_Mobile,
  MNIST_Analysis,
  friendscope,
} from '../assets';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'hobby',
    title: 'Life',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Mathematics Teacher',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Application Full Stack Developer',
    company_name: 'CORDE',
    icon: CORDE,
    iconBg: '#383E56',
    date: 'Jun 2024 – Present • Hybrid • Internship',
    points: [
      'Deeply involved in the design and development of a pioneering mobile application using React Native and Android, focused on enhancing offline data management and synchronization.',
      'Innovated with ArcGIS integration to boost asset management capabilities and operational efficiency.',
      'Crafted an intuitive and visually appealing user interface using Native Base, improving user engagement.',
      'Demonstrated technical proficiency in development environments like WebStorm and Android Studio, ensuring robust application performance through extensive testing on multiple platforms.',
      'Advanced secure data handling with TypeScript and SQL, fortified by SQLite for reliable offline data storage.',
    ],
  },
  {
    title: 'Web Full Stack Developer',
    company_name: 'Agrihire Solutions',
    icon: AgrihireSolutions,
    iconBg: '#E6DEDD',
    date: 'May 2024 – Jun 2024 • Hybrid • Full-time',
    points: [
      'Key responsibilities included designing a robust data model and a user-friendly GUI using a diverse tech stack (HTML, CSS, JavaScript, Python, Bootstrap, MySQL).',
      'Leveraged tools such as MaxKB API, leaflet.js, SendGrid, and ECharts to enhance functionality and user interaction.',
      'Employed Agile methodologies to develop and deploy a system that improved real-time tracking, inventory management.',
    ],
  },
  {
    title: 'Web Full Stack Developer',
    company_name: 'Swimming Club',
    icon: SwimmingClub,
    iconBg: '#383E56',
    date: 'Mar 2024 – Apr 2024 • Hybrid • Full-time',
    points: [
      'Actively involved in developing a sophisticated management system for the Countryside Community Swimming Club, employing Python, Flask, and front-end technologies including HTML, CSS, Jinja, JavaScript, and Bootstrap.',
      'Played a key role in creating a secure and efficient MySQL data model.',
      'Engaged fully in the agile development process, enhancing functionality and user interface, which led to improved operational efficiency and user satisfaction.',
      'The system automated key functions like membership management and scheduling, providing a scalable solution for future enhancements.',
    ],
  },
  {
    title: 'Mathematics Teacher',
    company_name: 'Various Educational Institutions',
    icon: MathematicsTeacher,
    iconBg: '#E6DEDD',
    date: 'Aug 2016 – Mar 2023 • On-site • Full-time',
    points: [
      'Delivered mathematics tutoring to junior and senior high school students, boosting their numerical skills and confidence.',
      'Provided counselling for university entrance examinations and physical education admission tests.',
      'Integrated IT tools to enhance educational practices and engaged in professional development training for faculty.',
    ],
  },
];

const testimonials = [
  {
    testimonial: "I've never been afraid to fail. I've always believed that if you're not failing, you're not pushing hard enough.",
    name: "Indra Nooyi",
    designation: "Former CEO of",
    company: "PepsiCo",
    image: IndraNooyi,
  },
  {
    testimonial: "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
    name: "Rosa Parks",
    designation: "Civil Rights",
    company: "Activist",
    image: RosaParks,
  },
  {
    testimonial: "Make sure you have a seat at the table. Better yet, create your own table where everyone is welcome.",
    name: "Michelle Obama",
    designation: "Former First Lady and",
    company: "Author",
    image: MichelleObama,
  }
];

const projects = [
  {
    name: 'CORDE Mobile Field Operations App',
    description: 'An enterprise-grade mobile application independently developed for CORDE NZ to transform their field operations. As the sole front-end developer, I delivered a comprehensive offline-first solution featuring intelligent background sync, GPS integration, and photo capture capabilities. I designed and implemented all aspects including UI/UX with dark/light themes, SQLite database architecture, work order management systems, and real-time sync monitoring. Beyond front-end development, I contributed to backend API integration, managed testing and build generation, while ensuring seamless data integrity across offline/online states.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'SQLite',
        color: 'orange-text-gradient',
      },
      {
        name: 'Native Base',
        color: 'pink-text-gradient',
      },
      {
        name: 'API Integration',
        color: 'purple-text-gradient',
      }
    ],
    image: CORDE_Mobile,
    source_link: 'https://corde-mobile-application-4yw7mtt.gamma.site/',
    website_link: 'https://corde.nz/',
    icon: 'mobile',
  },

  {
    name: 'Minimalist Good Post',
    description: 'A modern minimalist blog platform built with Docusaurus 3.5.2, featuring interactive 3D visualizations powered by Three.js. The platform provides comprehensive guides on minimalist living, digital wellness, and space organization. It incorporates a thoughtfully crafted UI with Space Grotesk typography, seamless dark/light mode switching, and fully responsive design. Enhanced with MDX support and Mermaid diagrams for visual concept representation, the platform offers an engaging reading experience while maintaining its minimalist essence.',
    tags: [
      {
        name: 'Docusaurus',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'orange-text-gradient',
      },
      {
        name: 'MDX',
        color: 'pink-text-gradient',
      }
    ],
    image: MinimalistGoodPost,
    source_link: 'https://github.com/ChanMeng666/minimalist-good-post',
    website_link: 'https://minimalist-good-post.vercel.app/',
    icon: 'github',
  },
  {
    name: 'FriendScope - Scientific Friendship Assessment',
    description: 'A modern web application that helps users evaluate and strengthen relationships through data-driven insights. Independently developed all aspects including scientific assessment methodology, interactive data visualization, and privacy-focused architecture. Built with Next.js and TypeScript, featuring comprehensive analysis across 10 key friendship dimensions, radar charts for trend visualization, and personalized PDF report generation. Enhanced with Framer Motion animations and Zustand state management to deliver an engaging yet secure experience while maintaining optimal performance.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Recharts',
        color: 'orange-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'purple-text-gradient',
      }
    ],
    image: friendscope,
    source_link: 'https://github.com/ChanMeng666/friendscope',
    website_link: 'https://friendscope.vercel.app',
    icon: 'github',
  },
  {
    name: 'Journey of Reincarnation',
    description: 'An innovative web application that simulates reincarnation experiences through interactive world maps and dynamic statistics. Independently developed all aspects including design and implementation. Built with Next.js 14 and TypeScript, featuring comprehensive data visualization, bilingual support, theme switching, and immersive audio system. Enhanced with Framer Motion animations and special events to deliver an engaging user experience while exploring global demographic diversity.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'orange-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Chart.js',
        color: 'purple-text-gradient',
      }
    ],
    image: JourneyOfReincarnation2,
    source_link: 'https://github.com/ChanMeng666/journey-of-reincarnation2',
    website_link: 'https://journey-of-reincarnation2.vercel.app/',
    icon: 'github',
  },
  {
    name: '3D Interactive Portfolio',
    description: 'A modern portfolio website featuring immersive 3D elements and smooth animations. Independently developed all aspects including brand identity, UI/UX design, and implementation. Built with React.js and Three.js, featuring custom 3D components, dynamic project showcases, and professional timeline. Enhanced with Framer Motion animations and EmailJS integration to deliver an engaging user experience while maintaining optimal performance across devices.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Framer Motion',
        color: 'orange-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'EmailJS',
        color: 'purple-text-gradient',
      }
    ],
    image: portfolio,
    source_link: 'https://github.com/ChanMeng666/3D-Portfolio',
    website_link: 'https://www.chanmeng.live/',
    icon: 'github',
  },
  {
    name: 'AgriHire Solutions Equipment Management System',
    description: 'A comprehensive agricultural equipment rental management system developed using Python Flask and MySQL. I independently architected and implemented the complete solution featuring real-time inventory tracking across 18+ locations, role-based multi-user access control, and an intelligent booking system. Key achievements include developing responsive customer/staff portals, ECharts-powered analytics dashboards, dynamic pricing engine with promotional capabilities, and geolocation-based store finder integration. The system significantly improved business operations by reducing manual processing by 75%, decreasing booking errors by 90%, and increasing inventory utilization by 35%. Beyond technical implementation, I designed the secure database architecture and ensured seamless data integrity across all system components.',
    tags: [
      {
        name: 'Python Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'orange-text-gradient',
      },
      {
        name: 'ECharts',
        color: 'pink-text-gradient',
      },
      {
        name: 'Geolocation APIs',
        color: 'purple-text-gradient',
      }
    ],
    image: agrihire_solutions_system,
    source_link: 'https://github.com/ChanMeng666/AgriHire-Solutions',
    website_link: 'https://agrihireaq.pythonanywhere.com/',
    icon: 'github',
  },
  {
    name: 'Swimming Club Management System (SCMS)',
    description: 'A comprehensive web-based management system developed using Python Flask and MySQL to streamline community swimming club operations. I designed and implemented role-based access control with dedicated portals for members (class booking, profile management), instructors (schedule management, attendance tracking), and managers (facility allocation, financial reporting). Key achievements include developing automated membership management with smart renewal tracking, real-time class booking with conflict prevention, and analytics dashboards for performance monitoring. The system features a scalable MySQL database design, secure Flask-Hashing authentication, and robust transaction management, significantly improving operational efficiency through process automation and real-time data insights.',
    tags: [
      {
        name: 'Python Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'orange-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'Flask-Hashing',
        color: 'purple-text-gradient',
      }
    ],
    image: swimmingClub,
    source_link: 'https://github.com/ChanMeng666/Countryside-Community-Swimming-Club',
    website_link: 'https://countryside-community-sw-6wqr4e1.gamma.site/',
    icon: 'github',
  },
  {
    name: 'East Coast Anglers Club',
    description: 'This project showcases my endeavor to create dynamic and visually appealing home and login pages. Focused on delivering a seamless user experience, these pages feature interactive elements and responsive design, ensuring a delightful and efficient interaction for users.',
    tags: [
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'orange-text-gradient',
      },
    ],
    image: EastCoastAnglersClub,
    source_link: 'https://github.com/ChanMeng666/Fishing-Club-Project',
    website_link: 'https://groupac.pythonanywhere.com/',
    icon: 'github',
  },
  {
    name: 'GitHub Profile README Template',
    description: 'A modern GitHub profile template that transforms developer portfolios into engaging visual experiences. Built with advanced Markdown styling and GitHub integrations, featuring custom shields.io badges for 80+ tech stack visualizations, live GitHub metrics (Streaks, Trophies, language stats), responsive layouts with animated SVG workflows, and automated content updates through GitHub Actions. The template provides a professional foundation for developers to showcase their achievements while maintaining minimalist design principles.',
    tags: [
      {
        name: 'Markdown',
        color: 'blue-text-gradient',
      },
      {
        name: 'GitHub Actions',
        color: 'green-text-gradient',
      },
      {
        name: 'SVG Animation',
        color: 'orange-text-gradient',
      },
      {
        name: 'Shields.io',
        color: 'pink-text-gradient',
      },
      {
        name: 'Technical Documentation',
        color: 'purple-text-gradient',
      }
    ],
    image: githubREADME,
    source_link: 'https://github.com/ChanMeng666/ChanMeng666',
    website_link: 'https://github.com/ChanMeng666',
    icon: 'github',
  },


  {
    name: 'MNIST Neural Network Analysis Project',
    description: 'A comprehensive machine learning implementation comparing three neural network architectures for MNIST handwritten digit recognition. I developed and analyzed a Deep CNN achieving 99.71% accuracy, a basic MLP reaching 99.05% accuracy, and an optimized model attaining 97.86% accuracy while reducing parameters by 79%. Key technical achievements include implementing advanced feature importance visualization systems, developing occlusion sensitivity analysis for model interpretability, and creating thorough error analysis frameworks. The project demonstrates significant optimization in neural architecture design, featuring robust data processing pipelines with feature selection, augmentation techniques, and comprehensive performance visualization using Matplotlib and Seaborn. Beyond model development, I engineered efficient data preprocessing workflows and ensured thorough documentation of comparative analysis across all architectures.',
    tags: [
      {
        name: 'TensorFlow/Keras',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
      {
        name: 'scikit-learn',
        color: 'orange-text-gradient',
      },
      {
        name: 'Deep Learning',
        color: 'pink-text-gradient',
      },
      {
        name: 'Computer Vision',
        color: 'purple-text-gradient',
      }
    ],
    image: MNIST_Analysis,
    source_link: 'https://github.com/ChanMeng666/MNIST-Handwritten-Digit-Recognition-Project',
    website_link: 'https://github.com/ChanMeng666/MNIST-Handwritten-Digit-Recognition-Project/blob/main/hand-written-digit-recognition_final.ipynb',
    icon: 'github',
  }
];

const footerIcons = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chanmeng666',
    icon: icon1,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ChanMeng666',
    icon: icon2,
  },
  {
    name: 'Personal Website',
    link: 'https://www.chanmeng.live/',
    icon: icon3,
  },
];

const panelsData = [
  {
    name: 'Programming',
    imageUrl: hobby_programming,
  },
  {
    name: 'Snorkelling',
    imageUrl: hobby_snorkelling,
  },
  {
    name: 'Travelling',
    imageUrl: hobby_travelling,
  },
  {
    name: 'Hiking',
    imageUrl: hobby_hiking,
  },
  {
    name: 'Tidying',
    imageUrl: hobby_tidying,
  },
];

const toRotateText = [
  'Simplify, simplify.',
  'I wanted to live deep and suck out all the marrow of life.',
  'Rather than love, than money, than fame, give me truth.',
  'Time is but the stream I go a-fishing in.',
  'All good things are wild and free.',
  'Things do not change; we change.',
  'The universe is wider than our views of it.',
  'Be yourself - not your idea of what you think somebody else\'s idea of yourself should be.',
  'Heaven is under our feet as well as over our heads.',
  'Money is not required to buy one necessary of the soul.',
  'Perhaps it was more important to cultivate the fields of the spirit than of the earth.',
  'Live the life you have imagined.',
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  toRotateText,
  footerIcons,
  panelsData,
};
