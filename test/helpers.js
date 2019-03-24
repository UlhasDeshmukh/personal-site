const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ulhas Deshmukh',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ulhas Deshmukh',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ulhas Deshmukh',
    heading: 'PROJECTS',
  },
  {
    route: '/contact',
    title: 'Contact | Ulhas Deshmukh',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
