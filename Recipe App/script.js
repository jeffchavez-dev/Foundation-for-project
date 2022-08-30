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