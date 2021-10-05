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
    {name: "to", char:"と"},
    {name: "na", char:"な"},
    {name: "ni", char:"に"},
    {name: "nu", char:"ぬ"},
    {name: "ne", char:"ね"},
    {name: "no", char:"の"},
    {name: "ha", char:"は"}, 
    {name: "hi", char:"ひ"},
    {name: "fu", char:"ふ"},
    {name: "he", char:"へ"},
    {name: "ho", char:"ほ"},
    {name: "ma", char:"ま"},
    {name: "mi", char:"み"},
    {name: "mu", char:"む"},
    {name: "me", char:"め"},
    {name: "mo", char:"も"},
    {name: "ya", char:"や"}, 
    {name: "yu", char:"ゆ"}, 
    {name: "yo", char:"よ"},
    {name: "ra", char:"ら"},
    {name: "ri", char:"り"},
    {name: "ru", char:"る"},
    {name: "re", char:"れ"},
    {name: "ro", char:"ろ"},
    {name: "wa", char:"わ"},
    {name: "wo", char:"を"},
    {name: "n", char:"ん"},
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
    let askList = JSON.parse(prompt("Custom Json List"));
    if(askList){    
      charList = askList;
      remainingCharList = [];
    }
}
