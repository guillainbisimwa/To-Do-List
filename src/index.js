const {
    brand
  } = require('./scripts/test');
  
  require('./style.css');

  const content = document.querySelector('#content');
  content.className = 'container main';
  
  const mainPage = document.createElement('div');
  //mainPage.appendChild(brand);
  content.appendChild(mainPage);

  console.log(brand);