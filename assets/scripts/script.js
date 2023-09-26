let divElement = document.getElementById("myDiv");

// Event listener to show an alert when the div is clicked
divElement.addEventListener("click", function() {
    alert("Div was clicked!");
});

// Change the text of the div
function changeText() {
    divElement.innerText = "New text for the div.";
}

// Change the style of the div
function changeStyle() {
    divElement.style.backgroundColor = "blue";
    divElement.style.color = "white";
}

// Create and add a new element to the div
function addElement() {
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "This is a new paragraph.";
    newParagraph.style.color = "red";
    newParagraph.setAttribute("id", "newPara"); // Setting an ID for easy removal later
    divElement.appendChild(newParagraph);
}

// Remove the new paragraph from the div
function removeElement() {
    let newParagraph = document.getElementById("newPara");
    if(newParagraph) {
        newParagraph.remove();
    }
}