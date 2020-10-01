var charList= [
    {name: "a", char:"あ"},
    {name: "i", char:"い"},
    {name: "u", char:"う"},
    {name: "e", char:"え"},
    {name: "o", char:"お"},
    {name: "ka", char:"か"},
    {name: "ki", char:"き"},
    {name: "ku", char:"く"},
    {name: "ke", char:"け"},
    {name: "ko", char:"こ"},
    {name: "sa", char:"さ"},
    {name: "shi", char:"し"},
    {name: "su", char:"す"},
    {name: "se", char:"せ"},
    {name: "so", char:"そ"},
    {name: "ta", char:"た"},
    {name: "chi", char:"ち"},
    {name: "tsu", char:"つ"},
    {name: "te", char:"て"},
    {name: "to", char:"と"}
];


/*
Next code is for false random to stop getting the sames symbols
*/
var remainingCharList = [];
function getRandomChar(){
    if(remainingCharList.length == 0)
        remainingCharList = charList.slice(0);//Copy charList
    
    var i = Math.floor(Math.random()*remainingCharList.length);
    return remainingCharList.splice(i, 1)[0];
}

function getImgLink(character){
    return "./img/Hiragana_" + character +"_stroke_order_animation.gif"
}

function askForCustom(){
    charList = JSON.parse(prompt("Custom Json List"));
    remainingCharList = [];
}
