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

addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML =  `<span class="random">Random Recipe</span>
    <div class="meal">
        <div class="meal-header">
            <img src="" alt="">
        </div>
        <div class="meal-body">
            <h4>Veggie Veggies</h4>
            <button id="btn"><i class="fa-regular fa-heart"></i></button>
            <ul>
                <li><img src="https://www.themealdb.com//images//media//meals//wxywrq1468235067.jpg" alt=""><span>PIE</span></li>
                <li><img src="https://www.themealdb.com//images//media//meals//xvsurr1511719182.jpg" alt=""><span>CEREAL MEAL</span></li>
                <li><img src="https://www.themealdb.com//images//media//meals//wvpsxx1468256321.jpg" alt=""><span>RICE MEAL</span></li>
            </ul>
        </div>
    </div>`
};