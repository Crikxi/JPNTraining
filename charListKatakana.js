var charList= [
    {name: "a", char:"ア"},
    {name: "i", char:"イ"},
    {name: "u", char:"ウ"},
    {name: "e", char:"エ"},
    {name: "o", char:"オ"},
    {name: "ka", char:"カ"},
    {name: "ki", char:"キ"},
    {name: "ku", char:"ク"},
    {name: "ke", char:"ケ"},
    {name: "ko", char:"コ"},
    {name: "sa", char:"サ"},
    {name: "shi", char:"シ"},
    {name: "su", char:"ス"},
    {name: "se", char:"セ"},
    {name: "so", char:"ソ"},
    {name: "ta", char:"タ"},
    {name: "chi", char:"チ"},
    {name: "tsu", char:"ツ"},
    {name: "te", char:"テ"},
    {name: "to", char:"ト"},
    {name: "na", char:"ナ"},
    {name: "ni", char:"ニ"},
    {name: "nu", char:"ヌ"},
    {name: "ne", char:"ネ"},
    {name: "no", char:"ノ"},
    {name: "ha", char:"ハ"}, 
    {name: "hi", char:"ヒ"},
    {name: "fu", char:"フ"},
    {name: "he", char:"ヘ"},
    {name: "ho", char:"ホ"},
    {name: "ma", char:"マ"},
    {name: "mi", char:"ミ"},
    {name: "mu", char:"ム"},
    {name: "me", char:"メ"},
    {name: "mo", char:"モ"},
    {name: "ya", char:"ヤ"}, 
    {name: "yu", char:"ユ"}, 
    {name: "yo", char:"ヨ"},
    {name: "ra", char:"ラ"},
    {name: "ri", char:"リ"},
    {name: "ru", char:"ル"},
    {name: "re", char:"レ"},
    {name: "ro", char:"ロ"},
    {name: "wa", char:"ワ"},
    {name: "wo", char:"ヲ"},
    {name: "n", char:"ン"},
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
    return "./img/Kakana_" + character +"_stroke_order_animation.gif"
}

function askForCustom(){
    let askList = JSON.parse(prompt("Custom Json List"));
    if(askList){    
      charList = askList;
      remainingCharList = [];
    }
}
