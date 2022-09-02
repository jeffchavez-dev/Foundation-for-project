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


getRandomeal()
// async keyword is used along with function declaration
async function getRandomeal() {
    const resp = await fetch( // await is used inside async function
        'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const randomMeal = await resp.json();
    console.log(randomMeal.meals[0])
}

async function getMealById(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}

async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?s=' + term);
}