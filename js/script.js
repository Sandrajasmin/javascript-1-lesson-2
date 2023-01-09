// We code it together

// 1. Select heading h2
//querySelector
//querySelectorAll
//querySelectorById

const heading2 = document.querySelector("h2");
console.log(heading2);


// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.dir(list);

// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li

const singleLi = document.querySelector("li");
console.log(singleLi);

// 6.
//  a. Select Multiple li's

const allLi = document.querySelectorAll("li");
console.log(allLi);

//  b. Loop on the list items with text and not just li

for (let i = 0; i < allLi.length; i++) {
    console.log(allLi[i].innerHTML)
}

// 7.
// a. select h1 element
const heading1 = document.querySelector("h1");
console.log(heading1)

// b. Change the color of that h1 to be purple

heading1.style.color = "purple";

// c. Change the border to be 1px solid green

heading1.style.border = "1px solid green";

// d. Change background colour to be light gray

heading1.style.backgroundColor = "lightGrey";

// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

heading1.style.padding = "1em";


//1 i want to select a div element 

const myDiv = document.querySelector("div");
console.log(myDiv);

//2 see if it has any class name

console.log(myDiv);

//3 add a class to this div element 

myDiv.classList.add("container");
console.dir(myDiv);

//4 see if it has a class name now

console.log(myDiv.className);

//5 add another class to the div

myDiv.classList.add("SecondClass");
console.dir(myDiv);

//6 so in total two class name on the div

console.log(myDiv.className);

myDiv.style.textAlign = "center"
myDiv.style.fontSize = "5em"



// 1. select the h1 and change the innerText

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Sandra";

// 2.loop through all the li element and change the innerText value to be changed

const allTheListItems = document.querySelectorAll("li");
for (let i = 0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = allTheListItems[i].innerText + " changed";
}

// 3.change the innerHTML of the h1 to be updated using innerHTML

const pageHeading2 = document.querySelector("h1");
pageHeading2.innerHTML = "SandyPandy";

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const addingDiv = document.querySelector("div");

addingDiv.innerHTML = '<p><b>Mother</b> fucker</p>';

addingDiv.style.fontSize = "3em"

// 5. select the ul

const list3 = document.querySelector("ul");

//  a. get the existing HTML inside the ul element and assign it to a variable

const existingHTML = list3.innerHTML;

//  a. create the new li HTML 

const newHTMLli = '<li>Hello i am a new item lolz</li>'

//  b. set the uls new HTML to the existing HTML plus the new HTML

list3.innerHTML = existingHTML + newHTMLli;
list3.innerHTML += newHTMLli;
