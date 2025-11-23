import './css/style.css';
import './js/app.js';

console.log('Application started successfully!');

// Демонстрация работы с модулями
import('./js/app.js').then(module => {
  console.log('Module loaded dynamically');
});