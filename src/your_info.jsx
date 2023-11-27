//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////


const backgroundImageUrl = 'https://wallpapers.com/images/hd/hellas-basin-destiny-2-warmind-mbxsrj8ts3aaz383.webp';


// First and last name
const name = {
  firstname: 'Ricardo',
  lastname: 'Scuotto',
  
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://www.google.com',
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
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg',
    githubUrl: 'https://github.com/Ricky-Sama/Reel-Tracks'
  },
  {
    title: 'Grab-My-Password',
    description: 'Store your password for your favorite websites',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg', 
    githubUrl: 'https://github.com/Ricky-Sama/Grab-My-Password'
  },
  {
    title: 'PWA Text-Editor',
    description: 'This PWA Text Editor will allow users to create notes or code snippets and run the application from their browser.',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg', 
    githubUrl: 'https://github.com/Ricky-Sama/Progressive-Web-Application-Text-Editor'
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
