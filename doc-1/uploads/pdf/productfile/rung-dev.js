const init =() =>{
               
    let vcount = document.querySelector("#vcount").value;
    let vmaxcount = document.querySelector("#vmaxcount").value;
    const book = document.querySelector("#book");
    const vhtmlpage = '';
    const vdatacss = '';
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
         //debugger
        if (currentLoacation < maxLocation) {
                        //check
                        MoveDataFilp(currentLoacation);

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
                                            
            currentLoacation++;
            console.log('Next: ' + currentLoacation);



        }
    }

    function goPrevPage() {
        //debugger
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

        debugger
        document.getElementById("book").innerHTML = null;   
        document.getElementById("vdatacss").innerHTML = null;  

        WritePageLoad();
           
        document.getElementById("book").innerHTML = (this.vhtmlpage);
     
        document.getElementById("vdatacss").innerHTML = (this.vdatacss);

    }
    async function WritePageLoad(){
        try{
                  
            let page =  vcount/2;
         
            for (let i = 1; i <= vcount; i++) {
        
            let bimg =i*2;  
                
            let aimg =bimg-1;

            if(i>1){
                //
                this.vhtmlpage +=` 

                <!-- Paper ${i}-->
                <div id="p${i}" class="paper">
                    <div class="front">
                        <div id="f${i}" class="front-content">                                     
                            <div class="book-img" id="img${aimg}">
                        
                            </div>
                        </div>
                    </div>
                    <div class="back">
                        <div id="b${i}" class="back-content">                                     
                            <div class="book-img" id="img${bimg}">
                        
                            </div>
                        </div>
                    </div>
                </div>

        `;
            }else{
                //
                this.vhtmlpage +=`

                        <!-- Paper ${i}-->
                        <div id="p${i}" class="paper">
                            <div class="front">
                                <div id="f${i}" class="front-content">                                     
                                    <div class="book-img" id="img${i}">
                                
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <div id="b${i}" class="back-content">                                     
                                    <div class="book-img" id="img${bimg}">
                                
                                    </div>
                                </div>
                            </div>
                        </div>

                `;                    
            }


            } 
     
            for (let i = 1; i <= page; i++) {
                this.vdatacss +=`
                    <link rel="stylesheet" id="dataimg${i}" href="./img-${i}.css" />                                       
                `;  
            }

            let addpages = '';
            let _v = 1;
            for (let i = 1; i <= vcount; i++) {


                if(i==1){
                    addpages += `
                        #p${i} {
                            z-index: ${vcount};
                        }
                    `;         
                }else{
                    addpages += `
                    #p${i} {
                        z-index: ${vcount-i};
                    }
                `;                 
                }
               
            }
            document.querySelector("#addpage").innerHTML = addpages;
   
        }catch{

        }
    }

    async function MoveDataFilp(p){
      
        try{
            document.getElementById("vdatacss").innerHTML =(null);
            this.vdatacss = '';
            //31*2 -1 = 61,62
            //32*2 -1 = 63,64
            //33*2 -1 = 65,66
            //34*2 -1 = 67,68

                for (let i = p-3; i <= ((p+3)*2); i++) {
                    this.vdatacss +=`
                        <link rel="stylesheet" id="dataimg${i}" href="./img-${i}.css" />   
                                        
                    `;  
                }  
            document.getElementById("vdatacss").innerHTML = (this.vdatacss);

        }catch(err){
            console.log(err);
        }
    }

}
window.onload = init();