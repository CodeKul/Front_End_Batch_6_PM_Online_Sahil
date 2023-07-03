//Event listener functions example
//Print the string typed inside the input tag on some div tag ; after the button is clicked ?
//But we need to populate that string inside the <h1> </h1> tags.

//fetching the input element using getElementById()
let inputTag = document.getElementById("personName");

console.log("The inputTag is ", inputTag);

//fetching the button element using getElementById
let buttonTag = document.getElementById("personBtnId");

console.log("The button tag is ", buttonTag);

//fetching the div tag "Content Area"
let contentAreaDivTag = document.getElementById("contentArea");

console.log("The type of contentAreaDivTag is ", typeof contentAreaDivTag);

console.log("The contentAreaDivTag is ", contentAreaDivTag);

function printInputName() {
  console.log("The printInputName function has been called.");

  console.log("inputTag inside printInputName function is ", inputTag);

  let personNameInInputTag = inputTag.value;

  console.log("personNameInInputTag is ", personNameInInputTag);

  //How to display on the user interface ; the value stored in the variable ?
  //By Using the template literal string.
  contentAreaDivTag.innerHTML = `<h1>${personNameInInputTag}</h1>`;

  //Clearing the input tag
  inputTag.value = "";
}

//It means that ; call the printInputName() function on the click of button.
buttonTag.addEventListener("click", printInputName);
