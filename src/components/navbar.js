const navHTML = `
<ul class="nav nav-tabs">
  <li class="nav-item dropdown">
    <a class="nav-link" id="dropdown-btn" aria-current="page" href="#">Menu</a>
    <div id="myDropdown" class="dropdown-content d-none">
      <a href="#" class="menu-btn">Breakfast</a>
      <a href="#" class="menu-btn">Saucers</a>
      <a href="#" class="menu-btn">Desserts</a>
      <a href="#" class="menu-btn">Beverages</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Locations</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="reservations-btn" href="#">Reservations</a>
  </li>
</ul>
<p class="pt-3 pe-4">The Mexican</p>
`;

const displayNavBar = () => {
  const navBAr = document.getElementById('nav-bar');

  navBAr.innerHTML = navHTML;

  const dropDownBTN = document.getElementById('dropdown-btn');
  const myDropdown = document.getElementById('myDropdown');

  dropDownBTN.addEventListener('click', () => {
    myDropdown.classList.toggle('d-none');
  });

  window.addEventListener('click', (e) => {
    if (!e.target.matches('#dropdown-btn')) {
      if (!myDropdown.classList.contains('d-none')) myDropdown.classList.add('d-none');
    }
  });

  // window.onclick = function (event) {
  //       if (!event.target.matches('#dropdown-btn')) {
  //     if (!myDropdown.classList.contains('d-none')) myDropdown.classList.add('d-none');
  //   }
  // };
};

export default displayNavBar;