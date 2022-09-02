//Get random meals
//Get meals by search

const searchBtn = document.getElementById("search");
const mealBtn = document.getElementById("btn");
const searchInput = document.getElementById("search-input");
const header = document.querySelector(".header-title");

searchBtn.addEventListener('click', () => {
    header.innerText = searchInput.value.toUpperCase();
    console.log('clicked')
})


async function getRandomeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
}

async function getMealById(id) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}

async function getMealsBySearch(term) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?s=' + term);
}