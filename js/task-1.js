const categories = document.getElementById('categories');
const listOfCat = categories.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCat.length}`);
for (let i=0; i<listOfCat.length;i++){
    const title = listOfCat[i].querySelector("h2").textContent;
    const numberOfEl = listOfCat[i].querySelectorAll("li").length
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberOfEl}`)
}