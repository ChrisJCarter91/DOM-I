const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItem1 = document.createElement('a');
const navItem2 = document.createElement('a');
const navItem3 = document.createElement('a');
const navItem4 = document.createElement('a');
const navItem5 = document.createElement('a');
const navItem6 = document.createElement('a');

  navItem1.textContent = 'Services'
  navItem2.textContent = 'Product'
  navItem3.textContent = 'Vision'
  navItem4.textContent = 'Features'
  navItem5.textContent = 'About'
  navItem6.textContent = 'Contact'

  const navContent1 = document.querySelector('nav');
  navContent1.append(navItem1);

  const navContent2 = document.querySelector('nav');
  navContent2.append(navItem2);

  const navContent3 = document.querySelector('nav');
  navContent3.append(navItem3);

  const navContent4 = document.querySelector('nav');
  navContent4.append(navItem4);

  const navContent5 = document.querySelector('nav');
  navContent5.append(navItem5);

  const navContent6 = document.querySelector('nav');
  navContent6.append(navItem6);

const titleText = document.querySelector('h1');

  titleText.textContent = 'Dom is Awesome!';

  titleText.classList.add('.cta');


const roundImg = document.getElementById('cta-img');

  roundImg.src = 'img/header-img.png';

const getStartedBtn = document.querySelector('button');

  getStartedBtn.textContent = 'Get Started';

  getStartedBtn.classList.add('.cta-text');

const h4Test = document.getElementsByTagName('h4');

const newh4Test = Array.from(h4Test);

  newh4Test[0].textContent = 'Features';
  newh4Test[1].textContent = 'About';
  newh4Test[2].textContent = 'Services';
  newh4Test[3].textContent = 'Product';
  newh4Test[4].textContent = 'Vision';
  newh4Test[5].textContent = 'Contact';

const midImg = document.getElementById('middle-img');

  midImg.src = 'img/mid-page-accent.jpg';

const txtContent = document.getElementsByTagName('p');

const newtxtContent = Array.from(txtContent);

newtxtContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

newtxtContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

newtxtContent[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

newtxtContent[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

newtxtContent[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

newtxtContent[5].textContent = '123 Way 456 Street Somewhere, USA';

newtxtContent[6].textContent = '1 (888) 888-8888';

newtxtContent[7].textContent = 'sales@greatidea.io';

newtxtContent[8].textContent = 'Copyright Great Idea! 2018';

