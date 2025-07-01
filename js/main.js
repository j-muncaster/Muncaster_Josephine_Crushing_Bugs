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
}

function drop(event) {
    event.preventDefault();
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetGame() {
    const labelBox = document.getElementById("label-box");
    const allLabels = document.querySelectorAll(".label");
    allLabels.forEach (label => {
        labelBox.appendChild(label);
    });
    console.log("Game has been reset.");
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
resetBtn.addEventListener("click", resetGame);
>>>>>>> Stashed changes
