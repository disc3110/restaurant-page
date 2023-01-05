const mainZone = document.getElementById('main-zone');
const createCards = (meals) => {
  meals.forEach((meal) => {
    const cardHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
    </div>
    `;
    const card = document.createElement('div');
    card.classList.add('card', 'm-2');
    card.innerHTML = cardHTML;
    mainZone.appendChild(card);
  });
};

async function getmeals() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican');
  const catData = await res.json();
  createCards(catData.meals);
}

export default getmeals;