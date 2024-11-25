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
  Forward_with_Her,
  LibraryManagementSystem,
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
    description: 'Developed a comprehensive offline-first mobile app for CORDE NZ with GPS tracking, photo capture, and intelligent sync capabilities, enabling efficient field operations.',
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
    description: 'Created a modern minimalist blog with Docusaurus featuring interactive 3D visualizations, focused on minimalist living and digital wellness guides.',
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
    name: 'Forward with Her Mentorship Website',
    description: 'Developed an immersive bilingual website for Forward with Her - a UN Women tech mentorship program - featuring interactive 3D visualizations and responsive design.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'orange-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Spline',
        color: 'purple-text-gradient',
      }
    ],
    image: Forward_with_Her,
    source_link: 'https://github.com/ChanMeng666/3d-model-viewer',
    website_link: 'https://forward-with-her.vercel.app/',
    icon: 'github',
  },

  {
    name: 'FriendScope - Scientific Friendship Assessment',
    description: 'Built a data-driven relationship evaluation web app with scientific assessments, interactive visualizations, and personalized reports across 10 friendship dimensions.',
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
    description: 'Developed an interactive reincarnation simulator web app featuring world maps, dynamic statistics, and bilingual support to explore global demographic diversity.',
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
    name: 'Library Management System',
    description: 'Built a full-stack library management system with Next.js and Supabase, featuring real-time book tracking, secure authentication, and responsive design.',
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
        name: 'Supabase',
        color: 'orange-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'shadcn/ui',
        color: 'purple-text-gradient',
      }
    ],
    image: LibraryManagementSystem,
    source_link: 'https://github.com/ChanMeng666/library-management-system',
    website_link: 'https://github.com/ChanMeng666/library-management-system',
    icon: 'github',
  },

  {
    name: '3D Interactive Portfolio',
    description: 'Developed a modern portfolio website with immersive 3D elements, featuring custom Three.js components and smooth Framer Motion animations.',
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
    description: 'Developed a comprehensive agricultural equipment rental system with Flask and MySQL, featuring multi-location inventory tracking and automated booking, reducing manual processing by 75% and booking errors by 90%.',
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
    description: 'Developed a comprehensive swimming club management system with Flask and MySQL, featuring role-based portals for automated class booking, membership management, and performance analytics.',
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
    description: 'Created a dynamic GitHub profile template with custom tech stack badges, live metrics, and automated updates through GitHub Actions for engaging developer portfolios.',
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
    description: 'A deep learning project comparing three neural networks (CNN: 99.71%, MLP: 99.05%, optimized model: 97.86%) for MNIST digit recognition, featuring advanced visualization and analysis techniques.',
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
