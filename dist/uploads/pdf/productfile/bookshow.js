const section = document.querySelector(".b-book-showcase");
const book = document.querySelector(".b-book");
const body = document.querySelector("body");

//Previous rotation value
let prev = 0;
//Calculation
let calc = 0;
//Drag sensitivity
const sensitivity = 2;

//Get the X Position when the mouse is clicked down
section.addEventListener("mousedown", function (e) {
    //Get mouse X Position
   
    const x = e.clientX;
    console.log('onmousedown' + x);
    /**Rotate the book on mousemove*/
    section.addEventListener("mousemove", rotate);
    function rotate(e) {
        calc = (e.clientX - x) / sensitivity;

        book.style.transform = `rotateY(${calc + prev}deg)`;

        console.log('rotateY' + calc + prev);

        /**Change Cursor To Grabbing Icon*/
        body.style.cursor = "grabbing";
    }

    //Save rotation value for next click event
    prev += calc;
});

window.addEventListener("mouseup", function () {
    //remove event listener
    section.removeEventListener("mousemove", rotate);
    body.style.cursor = "default";
});