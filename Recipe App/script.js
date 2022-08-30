//Get random meals
//Get meals by search

const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener('click', () => {
    searchInput.innerText = searchInput.value;
})