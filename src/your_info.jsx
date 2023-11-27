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
  'Programmer...',
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
    title: 'Photography',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-instagram',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },
      
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
    title: 'Grab-My-Password',
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
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////


// Description about myself
const aboutMeText = {
  infotext: `Hi there, I'm Ricardo. Becoming a Full Stack MERN (MongoDB, Express.js, React, Node.js) developer is an exciting journey that involves mastering a comprehensive set of technologies to build dynamic and scalable web applications. By mastering these skills, a Full Stack MERN developer is equipped to create end-to-end web applications, from the user interface to the server-side logic and database interactions. Applying these skills will open up diverse opportunities in the rapidly evolving field of web development.
    `,
  power_slogan: `Ctrl + Alt + Del the impossible.`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
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
