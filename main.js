let burger = document.querySelector(".section");
let clouseBurger = document.querySelector(".clouse");
let navigation = document.querySelector("ol");
let main = document.querySelector("body");
let header = document.querySelector(".header");
let stick = document.querySelector("span");
let amination = document.querySelector("Animation");

function Open(){
    burger.addEventListener("click", () =>{
        navigation.classList.remove("none");
        clouseBurger.classList.add("none");
        burger.style.opacity = "1";
        burger.classList.add("BorderBurger");
        burger.classList.add("Animation");
    })
}
function Clouse(){
    document.body.addEventListener ("click", (event) =>{
        let target = event.target.closest("section");
    
        if (event.target === main){
            navigation.classList.add("none");
            burger.style.opacity = "0.5";
            burger.classList.remove("BorderBurger");
            burger.classList.remove("Animation");
        }
        if (event.target === header){
            navigation.classList.add("none");
            burger.style.opacity = "0.5";
            burger.classList.remove("BorderBurger");
            burger.classList.remove("Animation");
        }
        if (event.target === stick){
            navigation.classList.add("none");
            clouseBurger.classList.remove("none");
            burger.style.opacity = "0.5";
            burger.classList.remove("BorderBurger");
            burger.classList.remove("Animation");
        }
    })
}
Open();
Clouse();