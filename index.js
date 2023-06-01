window.addEventListener("DOMContentLoaded", function(){
    
    
    filterListener();
})

function filterListener(){
    const body = document.querySelector("body");
    const ulFilter = body.querySelectorAll("ul")[0];
    const ulItems = body.querySelectorAll("ul")[1];
    console.log(ulFilter);
    const liFilter = ulFilter.querySelectorAll("li");
    const liItems = ulItems.querySelectorAll("li");
    let tableauSameColors = [];
    
    for(let liF of liFilter){
        liF.addEventListener("click", function(event){
            for(let liI of liItems){
                if(liF.getAttribute("data-color") === liI.getAttribute("data-color")){
                    tableauSameColors.push(liI);
                    liI.classList.add("transparent");
                    liI.addEventListener("transitionend", function(){
                        liI.classList.add("inactive");
                    })
                }
            }
            console.log(tableauSameColors);
            event.target.classList.add("inactive");
        })
    }
    
}