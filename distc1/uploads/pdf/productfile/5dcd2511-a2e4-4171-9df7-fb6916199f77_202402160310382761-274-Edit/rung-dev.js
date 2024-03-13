//data

const init =() =>{
               
    let vcount = document.querySelector("#vcount").value;
    let vmaxcount = document.querySelector("#vmaxcount").value;
    const book = document.querySelector("#book");
    //Event
    document.querySelector("#prev-btn").addEventListener("click", function () { 
        goPrevPage();
    });

    // document.querySelector("#prev-btnh").addEventListener("click", function () {
    //     goPrevPage();
    // });

    document.querySelector("#next-btn").addEventListener("click", function () {
        goNexPage();
    });
    // document.querySelector("#next-btnh").addEventListener("click", function () {
    //     goNexPage();
    // });


    //Business Logic

    let currentLoacation = 1;
    let numOfPapers = vcount;
    let maxLocation = vmaxcount;

    function openBook() {
        book.style.transform = "translateX(50%)";
        document.querySelector("#prev-btn").style.transform = "translateX(-180px)";
        document.querySelector("#next-btn").style.transform = "translateX(180px)";

        //book.style.width = "550px";
        //book.style.height = "700px";
    }

    function closeBook(isAtBeginning) {
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }

        document.querySelector("#prev-btn").style.transform = "translateX(0px)";
        document.querySelector("#next-btn").style.transform = "translateX(0px)";
    }

    function goNexPage() {
        //console.log('Next' + currentLoacation);
         debugger
        if (currentLoacation < maxLocation) {
            if (currentLoacation == 1) {
                openBook();
                document.querySelector("#p" + currentLoacation).classList.add("flipped");
                document.querySelector("#p" + currentLoacation).style.zIndex = 1;
             
            } else {
                if (currentLoacation == numOfPapers) {
                    document.querySelector("#p" + currentLoacation).classList.add("flipped");
                    document.querySelector("#p" + currentLoacation).style.zIndex = currentLoacation;
                    closeBook();
                } else {
                    document.querySelector("#p" + currentLoacation).classList.add("flipped");
                    document.querySelector("#p" + currentLoacation).style.zIndex = currentLoacation;
                }

            }
           //document.getElementById("img" + currentLoacation).style.display = 'block';
           //document.getElementById("img" + currentLoacation).style.backgroundImage = `url('${dataURL1}')`;
            currentLoacation++;
            console.log('Next: ' + currentLoacation);
        }
    }

    function goPrevPage() {
        debugger
        if (currentLoacation > 1) {     
            let _id = (currentLoacation - 1);
            if (currentLoacation == 2) {
                closeBook(true);
                document.querySelector("#p" + _id).classList.remove("flipped");
                document.querySelector("#p" + _id).style.zIndex = maxLocation;
            } else {
                console.log('numOfPapers-- : ' + numOfPapers);
                if (currentLoacation == maxLocation) {
                    openBook();
                    document.querySelector("#p" + _id).classList.remove("flipped");
                    document.querySelector("#p" + _id).style.zIndex = 1;             
                    console.log('maxLocation in : ' + maxLocation);
                } else {
                    let _v = (maxLocation - currentLoacation)+1;
                    document.querySelector("#p" + _id).classList.remove("flipped");
                    document.querySelector("#p" + _id).style.zIndex = _v;
                }
            }
            currentLoacation--;
            console.log('currentLoacation: ' + currentLoacation + ' maxLocation: ' + maxLocation);
        }
    }

    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
        const _r = window.innerWidth / window.innerHeight;
        console.log(_r);
    }

    /** zoom zoomflip */

    window.addEventListener('load', onWindowLoad);
    function onWindowLoad() {
        //console.log('Onload main js')

    }


}
window.onload = init();