import './app.scss';

window.addEventListener('load', () => {
  const header = document.createElement('h1');
  header.innerText = 'Webpack❤️TS';

  const body = document.querySelector('body');
  body.appendChild(header);

  console.log('testing for prettier to fix this');
});
