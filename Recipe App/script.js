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

    if(resp.status !==404) {
        const noMeal = document.createElement('div');
        noMeal.classList.add('meal');
        noMeal.innerHTML = 
        `<h2>No meal available today. <br> 
       
        <br> Error:  ${resp.status}</h2>`
        meals.appendChild(noMeal)
        console.log(resp.status)
        const respData = await resp.json();
        const randomMeal = respData.meals[0];
        addMeal(randomMeal, true);
        console.log(randomMeal)
       
    } else {
        const respData = await resp.json();
        const randomMeal = respData.meals[0];
        addMeal(randomMeal, true);
        console.log(randomMeal)
    }
   
    
}


async function getMealById(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}


async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?s=' + term);
}


function addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML =  `
    
   
    <div class="meal">
        <div class="meal-header">
        ${random ? ` <span class="random">Random Recipe</span>` : ''}
            <img 
            src="${mealData.strlMealThumb}" 
            alt="${mealData.strMeal}"
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button id="btn"><i class="fa fa-heart"></i></button>
        </div>
    </div>`
    ;
    meals.appendChild(meal)
};