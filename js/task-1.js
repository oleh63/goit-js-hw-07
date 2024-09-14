const categories = document.querySelectorAll('#categories li.item');
console.log("Number of categories:", categories.length)

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    console.log("Category:", categoryTitle);
    const resultElement = category.querySelectorAll('ul li');
    console.log("Elements:", resultElement.length);
})


