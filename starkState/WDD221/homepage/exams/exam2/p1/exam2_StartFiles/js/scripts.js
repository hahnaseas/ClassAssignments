// Hahna Seaman, Web Dev with JavaScript: Exam 2 Part 1, 03/04/24


// 1: Select / (get) the element with the ID 'about'. 
//    Store the element in the variable `about`.
//	  Use a method to modify the about id with a color border of your choice

const about = document.getElementById('about');
about.style.border = "2px solid #ff5733";

// 2: Select all the <h2> elements in the document.
//    Using a loop, set the color of the <h2> elements to a different color.

const h2Elements = document.querySelectorAll('h2');
for (const h2 of h2Elements) {
    h2.style.color = "#a50540";
}

// 3: Select all elements with the class '.card'.
//    Using a loop, set their background color to the color of your choice.

const cardElements = document.querySelectorAll('.card');
for (const card of cardElements) {
	card.style.backgroundColor = "#acadd0";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
//    Modify the color to one of your choice.

const ul = document.querySelector('ul');
ul.style.border = "2px solid #000000";  // just need to change the hex value

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

const container = document.querySelectorAll('.container')[1];


// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.

const aElementsWithATitle = document.querySelectorAll('a[title]');
for (const aElement of aElementWithATitle) {
aElement.style.color = "#f56d77";
}
