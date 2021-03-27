const colors = ["#F0F8FF","#FAEBD7","red","#00FFFF","#7FFFD4","#F0FFFF","#F5F5DC","#FFE4C4","#000000","#FFEBCD","#0000FF","#8A2BE2","#A52A2A","#DEB887","#00FFFF","#FF8C00","#9ACD32","#FFF","#F5F5F5","Ivory"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color-code');

btn.addEventListener('click', function(){
    // get a randome number between 0 and 3 ( Green to #f1502) 

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}