//Get random meals
//Get meals by search

const searchBtn = document.getElementById("search");
const mealBtn = document.getElementById("btn");
const searchInput = document.getElementById("search-input");
const header = document.querySelector(".header-title");
const meals = document.querySelector(".meals");

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
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
   
    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}

async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?s=' + term);
}

addMeal(mealData, random = false )