'use strict'

const categories = document.querySelectorAll('.item');

const NumberOfCategories = `Number of categories: ${categories.length}`;

console.log(NumberOfCategories);

const titleAndNumberElementsOfCategories = categories.forEach(category => {
    const titleOfCategory = category.querySelector('h2').textContent;

    const numberElementsOfCategory = category.querySelectorAll('ul li').length;

    console.log(`Category: ${titleOfCategory}`);
    console.log(`Elements: ${numberElementsOfCategory}`);
});
