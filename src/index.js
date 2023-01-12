import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import displayNavBar from './components/navbar';
import displayMenu from './pages/menu';
import displayReservationForm from './pages/reservations';

const mainZone = document.getElementById('main-zone');
const clearZone = () => { mainZone.innerHTML = ''; };

displayNavBar();
displayMenu(mainZone);

const menuBtns = document.getElementsByClassName('menu-btn');
const arrayOfMenuBtns = Array.from(menuBtns);
const reservationsBtn = document.getElementById('reservations-btn');

reservationsBtn.addEventListener('click', () => {
  clearZone();
  displayReservationForm(mainZone);
});

arrayOfMenuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener('click', () => {
    clearZone();
    displayMenu(mainZone);
  });
});