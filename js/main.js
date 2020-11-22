//part 1 - pop window

let brightItemHeadLineInfoButton = document.getElementsByClassName("bright-item-headLine-info-button");
let brightItemHeadLineInfoSquare = document.getElementsByClassName("bright-item-headLine-info-square");

for (let i = 0; i < brightItemHeadLineInfoButton.length; i++) {
    brightItemHeadLineInfoButton[i].addEventListener("mouseover", function() {
        brightItemHeadLineInfoSquare[i].style.display = "block";
    });
    brightItemHeadLineInfoButton[i].addEventListener("mouseout", function() {
        brightItemHeadLineInfoSquare[i].style.display = "none";
    });
}