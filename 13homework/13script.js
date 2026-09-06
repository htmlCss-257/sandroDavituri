const Temperature = prompt("Please enter a temperature in celsius:");
const celsius = Number(Temperature);

let fahrenheit = (celsius * 9/5) + 32;
alert(celsius + ("°C is " + fahrenheit + "°F"));

document.getElementById("firstparagraphs").innerHTML = "changed text";

const newParagraph= document .createElement("p")
newParagraph. textContent = "This is a new paragraph";
document.body.appendChild(newParagraph); //test