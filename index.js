// this is for image 1
let randomNumber_1 = Math.floor(Math.random() * 6) + 1; //here we are generating the random number 

let randomDice_1 = 'dice' + randomNumber_1 + '.png'; // here for image src we are concat the random number with the image name

let img_1 = document.querySelector('.img1'); // here we are selecting the img elements based on the class name

img_1.setAttribute('src', randomDice_1); // here we are changin the attribute values with teh setAttribute method



// this is for image 2 :
let randomNumber_2 = Math.floor(Math.random() * 6) + 1;

let randomDice_2 = 'dice' + randomNumber_2 + '.png';

//we can directyl do it like this inistead of creating a variable like 1st random number 
document.querySelector('.img2').setAttribute('src', randomDice_2);


// 
if (randomNumber_1 == randomNumber_2) {
    document.querySelector('h1').textContent = "Draw(●'◡'●)"
} else if (randomNumber_1 > randomNumber_2) {
    document.querySelector('h1').textContent = '🚩Player1 Wins';
} else {
    document.querySelector('h1').textContent = 'Player2 Wins🚩';
}