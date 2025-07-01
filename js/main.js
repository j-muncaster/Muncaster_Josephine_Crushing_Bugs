console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
    this.classList.add("highlight");
}

function drop(event) {
    event.preventDefault();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes

    this.classList.remove("highlight");

    if (this.children.length > 0) {
        console.log("This zone already has a label.");
        return;
    }
>>>>>>> Stashed changes
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});
<<<<<<< Updated upstream
=======

const resetBtn = document.getElementById("reset-btn");
<<<<<<< Updated upstream
resetBtn.addEventListener("click", resetGame);
>>>>>>> Stashed changes
=======
resetBtn.addEventListener("click", resetGame);
>>>>>>> Stashed changes
