//declare alphabet variable
const alphabet = "abcdefghijklmnopqrstuvwxyz"

//function for getting a random letter
let randomLetter;
let getRandomLetter = () => {
    return randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
};
console.log(getRandomLetter());

//function for adding new li element to list
let addList = () =>{
    var ol = document.querySelector("ol");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("You Chose the Secret Letter: " + randomLetter));
    ol.appendChild(li);       
};

//check if correct key is pressed and show win message
let keyPressed;
document.body.addEventListener('keypress', function(event){
    keyPressed = event.key;
    console.log(keyPressed);
    
    if(randomLetter == keyPressed){
        addList();
        getRandomLetter();
        console.log(randomLetter);
    }
    
}); 