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

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'dedication', value: 100, unit: '%' },
  { word: 'Finished projects', value: 3, unit: '' },
  { word: 'Experience', value: 6, unit: ' months' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg' 
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////


// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Ricardo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.
    `,
  power_slogan: `Lorem ipsum dolor sit amet`,
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
