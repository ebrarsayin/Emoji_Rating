const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["black","red", "orange" , "white" , "lightgreen" , "gold"]

updateRating();

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click",() => {
        updateRating(index)
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1){
            starEl.classList.add("active");
        }
        else {
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${(index+1) * 50}px)`
        emojiEl.style.color = colorsArray [index+1]
    });
    
}
