const slides=document.querySelectorAll(".slider")
var counter=0;
// console.log(a);
slides.forEach(
    (slider,index) =>{
        slider.style.left = `${index * 100}%`  //left is written as we want our pictures to change from left side of the screen
    }

    )
    
    const Previous = () => {
        counter--
        slideImage()
        // alert()
    }
    
    const Next = () => {
        counter++
        slideImage()
        // alert()
    }
    
const slideImage =() => {
    slides.forEach(
        (slider) => {
            slider.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


// // when we want our pictures to slide from top to bittim

// const slides=document.querySelectorAll(".slider")
// var counter=0;
// // console.log(a);
// slides.forEach(
//     (slider,index) =>{
//         slider.style.bottom = `${index * 100}%`  //left is written as we want our pictures to change from left side of the screen
//     }

//     )
    
//     const Previous = () => {
//         counter--
//         slideImage()
//         // alert()
//     }
    
//     const Next = () => {
//         counter++
//         slideImage()
//         // alert()
//     }
    
// const slideImage =() => {
//     slides.forEach(
//         (slider) => {
//             slider.style.transform = `translateY(+${counter * 100}%)`
//         }
//     )
// }
