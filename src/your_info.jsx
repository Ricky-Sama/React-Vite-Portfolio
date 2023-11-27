//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////


const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/buildings_tower_spire_1110098_6144x4608.jpg';


// First and last name
const name = {
  firstname: 'Ricardo',
  lastname: 'Scuotto',
  
// Resume link
  url: 'https://drive.google.com/file/d/18Rwwo6PTx5LuK9Bk2EyxUgxPsw_35u3B/view?usp=sharing',
};

// Display job title or skills
const typeWriterText = [
  'Full-Stack Developer...',
  'Likes to chill...',
  'Cool dude...'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/Ricky-Sama',
  },
  
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'MongoDB',
    description:
      "MongoDB is a popular, open-source, NoSQL database management system that stores data in a flexible, JSON-like format called BSON (Binary JSON). Unlike traditional relational database systems, MongoDB is designed to handle large amounts of unstructured or semi-structured data, making it particularly well-suited for certain types of applications.",
    skills: [
      {
        icon: 'lni lni-database',
        title: 'HTML5',
      },
      // {
      //   icon: 'lni lni-certificate',
      //   title: 'CSS3',
      // },
      // {
      //   icon: 'lni lni-instagram',
      //   title: 'JavaScript',
      // },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Express.js and Node.js',
    description:
    "Node.js is the underlying runtime environment that executes JavaScript code on the server, while Express.js is a framework that runs on top of Node.js, providing a set of tools and conventions for building web applications and APIs using JavaScript. Both technologies contribute to the ability to create efficient and scalable server-side applications using JavaScript.",
    skills: [
      {
        icon: 'lni lni-javascript',
        title: 'adobe',
      },
      // {
      //   icon: 'lni lni-code',
      //   title: 'Code',
      // },
      // {
      //   icon: 'lni lni-sketch',
      //   title: 'Sketch'
      // },
     
      
    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'REACT',
    description:
    "React, often referred to as React.js or ReactJS, is an open-source JavaScript library for building user interfaces or UI components. It is developed and maintained by Facebook and a community of individual developers and companies. React is commonly used to build single-page applications where user interactions need to be dynamic and responsive.",
    skills: [
      {
        icon: 'lni lni-react',
        title: 'Pinterest',
      },
      // {
      //   icon: 'lni lni-crop',
      //   title: 'Crop',
      // },
      
    ],
  },
  
  
];

// List of achiements in a number counter animation
const achievements = [
  { word: 'dedication', value: 100, unit: '%' },
  { word: 'Finished projects', value: 3, unit: '' },
  { word: 'Experience', value: 6, unit: ' months' },
];



// List of Projects
const projectData = [
  {
    title: 'Reel-Tracks',
    description: 'Search any movie and the results will show you the corresponding soundtrack.',
    demoUrl: 'https://ricky-sama.github.io/Reel-Tracks/',
    githubUrl: 'https://github.com/Ricky-Sama/Reel-Tracks'
  },
  {
    title: 'Grab My Password',
    description: 'Store your password for your favorite websites',
    demoUrl: 'https://grab-my-password-23e7faf05060.herokuapp.com/', 
    githubUrl: 'https://github.com/Ricky-Sama/Grab-My-Password'
  },
  {
    title: 'Tech-Blog',
    description: "This Tech Blog will allow users to publish their blog posts and comment on other developers' posts as well.",
    demoUrl: 'https://rs-tech-blog-ff26cfc66031.herokuapp.com/', 
    githubUrl: 'https://github.com/Ricky-Sama/Tech-Blog'
  },
  {
    title: 'Note-Taker',
    description: "This application is called Note Taker that can be used to write and save notes.",
    demoUrl: 'https://easy-note-taker-application-39c0c4503c26.herokuapp.com/', 
    githubUrl: 'https://github.com/Ricky-Sama/Note-Taker'
  },
  {
    title: 'Password-Generator',
    description: "This Password Generator will allow you to create a randomized password anywhere from 8 to 128 characters. ",
    demoUrl: 'https://ricky-sama.github.io/Password-Gen-JS/', 
    githubUrl: 'https://github.com/Ricky-Sama/Password-Gen-JS'
  },
  {
    title: 'Work-Day-Scheduler',
    description: "This is a simple online app that allows the user to add important events to a Work Day Scheduler.",
    demoUrl: 'https://ricky-sama.github.io/Work-Day-Scheduler/', 
    githubUrl: 'https://github.com/Ricky-Sama/Work-Day-Scheduler'
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////


// Description about myself
const aboutMeText = {
  infotext: `Hi there, I'm Ricardo. I love to watch movies, cook, and exercise. However, a goal of mine was to become a Full Stack MERN (MongoDB, Express.js, React, Node.js) developer. It was an exciting journey that involved mastering a comprehensive set of technologies to build dynamic and scalable web applications. By mastering these skills, I'll be equipped to create end-to-end web applications, from the user interface to the server-side logic and database interactions. Applying these skills will open up diverse opportunities in the rapidly evolving field of web development.
    `,
  power_slogan: `Ctrl + Alt + Del the impossible.`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_36kw6ok',
  templateID: 'template_fdnq121',
  userID: 'WdJ6_yVUeO0yhAw0H',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
