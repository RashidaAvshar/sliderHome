let right = document.querySelector(".fa-angle-right")
let left = document.querySelector(".fa-angle-left")
let slider = document.querySelector(".slider")

right.addEventListener("click", function(){
    rightFun()
})
left.addEventListener("click", function(){
    leftFun()
})
document.body.addEventListener("keyup", function(e){
    if(e.which == 39){
        rightFun()
    }
    if(e.which == 37){
        leftFun();
    }
})

function rightFun(){
    let active = document.querySelector(".active")
    if(active.nextElementSibling !== null){
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    }else{
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }
}

function leftFun(){
    let active = document.querySelector(".active")
    if(active.previousElementSibling !== null){
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    }else{
        let count = slider.children[0].childElementCount;
        slider.children[0].children[count -1].classList.add("active");
        active.classList.remove("active")
    }
}