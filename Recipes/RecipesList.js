let recipes =["1","2"];


document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = '';
    let allList= recipes;


    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = "Recipes";
    recipeList.appendChild(categoryTitle);

    for (let i = 0; i < allList.length; i++) {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        const recipeName = document.createElement("h4");
        recipeName.textContent = allList[i];

        recipeDiv.appendChild(recipeName);
        recipeList.appendChild(recipeDiv);
        console.log(recipeList)
    }
});