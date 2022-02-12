const colors = [ "#F2D2BD", "#DE3163","#F88379", "#FFB6C1", "#FAA0A0 ","#E0BFB8	", "#E37383	", "#C21E56	"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color"); 


btn.addEventListener("click", function(){
    console.log(document.body);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() *colors.length);
}