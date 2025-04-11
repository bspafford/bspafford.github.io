// normal
var hiraNorm = [[["あ", "a", true], ["い", "i", true], ["う", "u", true], ["え", "e", true], ["お", "o", true], ["ん", "n", true]], // 0, 1, 2, 3, 4, 5
              [["か", "ka", true], ["き", "ki", true], ["く", "ku", true], ["け", "ke", true], ["こ", "ko", true]],                   // 6, 7, 8, 9, 10
              [["さ", "sa", true], ["し", "shi", true], ["す", "su", true], ["せ", "se", true], ["そ", "so", true]],                  // 11, 12, 13, 14, 15
              [["た", "ta", true], ["ち", "chi", true], ["つ", "tsu", true], ["て", "te", true], ["と", "to", true]],                 // 16, 17, 18, 19, 20
              [["な", "na", true], ["に", "ni", true], ["ぬ", "nu", true], ["ね", "ne", true], ["の", "no", true]],                   // 21, 22, 23, 24, 25
              [["は", "ha", true], ["ひ", "hi", true], ["ふ", "fu", true], ["へ", "he", true], ["ほ", "ho", true]],                   // 26, 27, 28, 29, 30
              [["ま", "ma", true], ["み", "mi", true], ["む", "mu", true], ["め", "me", true], ["も", "mo", true]],                   // 31, 32, 33, 34, 35
              [["や", "ya", true], ["ゆ", "yu", true], ["よ", "yo", true]],
              [["ら", "ra", true], ["り", "ri", true], ["る", "ru", true], ["れ", "re", true], ["ろ", "ro", true]],
              [["わ", "wa", true], ["を", "wo", true]]];

// Dakuon
var hiraDakuon = [[["が", "ga", true], ["ぎ", "gi", true], ["ぐ", "gu", true], ["げ", "ge", true], ["ご", "go", true]],
              [["ざ", "za", true], ["じ", "ji", true], ["ず", "zu", true], ["ぜ", "ze", true], ["ぞ", "zo", true]],
              [["だ", "da", true], ["ぢ", "ji", true], ["づ", "zu", true], ["で", "de", true], ["ど", "do", true]],
              [["ば", "ba", true], ["び", "bi", true], ["ぶ", "bu", true], ["べ", "be", true], ["ぼ", "bo", true]],
              [["ぱ", "pa", true], ["ぴ", "pi", true], ["ぷ", "pu", true], ["ぺ", "pe", true], ["ぽ", "po", true]]];

// normal
var kataNorm = [[["ア", "a", true], ["イ", "i", true], ["ウ", "u", true], ["エ", "e", true], ["オ", "o", true], ["ン", "n", true]], // 0, 1, 2, 3, 4, 5
                [["カ", "ka", true], ["キ", "ki", true], ["ク", "ku", true], ["ケ", "ke", true], ["コ", "ko", true]],                   // 6, 7, 8, 9, 10
                [["サ", "sa", true], ["シ", "shi", true], ["ス", "su", true], ["セ", "se", true], ["ソ", "so", true]],                  // 11, 12, 13, 14, 15
                [["タ", "ta", true], ["チ", "chi", true], ["ツ", "tsu", true], ["テ", "te", true], ["ト", "to", true]],                 // 16, 17, 18, 19, 20
                [["ナ", "na", true], ["ニ", "ni", true], ["ヌ", "nu", true], ["ネ", "ne", true], ["ノ", "no", true]],                   // 21, 22, 23, 24, 25
                [["ハ", "ha", true], ["ヒ", "hi", true], ["フ", "fu", true], ["ヘ", "he", true], ["ホ", "ho", true]],                   // 26, 27, 28, 29, 30
                [["マ", "ma", true], ["ミ", "mi", true], ["ム", "mu", true], ["メ", "me", true], ["モ", "mo", true]],                   // 31, 32, 33, 34, 35
                [["ヤ", "ya", true], ["ユ", "yu", true], ["ヨ", "yo", true]],
                [["ラ", "ra", true], ["リ", "ri", true], ["ル", "ru", true], ["レ", "re", true], ["ロ", "ro", true]],
                [["ワ", "wa", true], ["ヲ", "wo", true]]];

// Dakuon
var kataDakuon = [[["ガ", "ga", true], ["ギ", "gi", true], ["グ", "gu", true], ["ゲ", "ge", true], ["ゴ", "go", true]],
              [["ザ", "za", true], ["ジ", "ji", true], ["ズ", "zu", true], ["ゼ", "ze", true], ["ゾ", "zo", true]],
              [["ダ", "da", true], ["ヂ", "ji", true], ["ヅ", "zu", true], ["デ", "de", true], ["ド", "do", true]],
              [["バ", "ba", true], ["ビ", "bi", true], ["ブ", "bu", true], ["ベ", "be", true], ["ボ", "bo", true]],
              [["パ", "pa", true], ["ピ", "pi", true], ["プ", "pu", true], ["ペ", "pe", true], ["ポ", "po", true]]];

              // ["", "", true]
var words = [[["おちゃ", "green teas, green tea, tea", true], ["ください", "please", true], ["すし", "sushi", true], ["ごはん", "rice, meal, meals", true], ["みず", "water, waters", true], ["と", "and, that, door", true], ["いしゃ", "doctor, doctors", true], ["せんせい", "teacher, Professor, teachers", true], ["やさしい", "kind, easy, nice", true], ["べんごし", "lawyer, lawyers", true], ["かっこいい", "cool, good-looking, stylish", true], ["ひと", "person, people", true], ["がくせい", "student, students", true]],
             [["こんにちは", "hello", true], ["さん", "Mr., Miss, Mrs.", true], ["じゃあね", "bye", true], ["カレー", "curry", true], ["は", "is, with, regarding", true], ["おいしい", "good, delicious, tasty", true], ["ラーメン", "ramen", true], ["これ", "this (one), these, this", true], ["それ", "that (one), it, that", true], ["ピザ", "pizza", true], ["ケーキ", "cake", true], ["はい", "yes", true]],
             [["いいえ", "no", true], ["か", "or, is it?, that", true], ["おおきい", "big, large", true], ["にほん", "Japan", true], ["ちいさい", "small, little", true], ["アメリカ", "America, the USA, the US", true], ["カナダじん", "Canadian", true], ["アメリカじん", "American", true], ["カナダ", "Canada", true], ["にほんじん", "Japanese", true], ["イギリス", "Britain, the United Kingdom, British", true], ["ブラジル", "Brazil", true]],
             [["イギリスじん", "British", true], ["ブラジルじん", "Brazilian", true], ["どこ", "where", true], ["コンビニ", "convenience store", true], ["ホテル", "hotel", true], ["バスてい", "bus stop", true], ["ここ", "here", true], ["デパート", "department store", true], ["えき", "station, train station, stations", true], ["だいがく", "university, college", true], ["そこ", "there", true], ["ぼうし", "hat, hats", true]],
             [["あかい", "red", true], ["コート", "coat", true], ["しろい", "white", true], ["くつ", "shoes, shoe", true], ["この", "this, these", true], ["かわいい", "cuter, cute, pretty", true], ["その", "the, that, its", true], ["おもしろい", "interesting, fun, funny", true], ["いち", "one, an", true], ["に", "to, in, as (a)", true], ["じ", "o'clock", true], ["三", "3, three, third", true], ["二", "two, 2", true], ["一", "one, an, a", true]]];
// temp
for (let y = 0; y < hiraNorm.length; y++) {
    for (let x = 0; x < hiraNorm[y].length; x++) {
        hiraNorm[y][x].splice(3, 0, "h1");
        hiraNorm[y][x].push([x, y]);
    }
}
for (let y = 0; y < hiraDakuon.length; y++) {
    for (let x = 0; x < hiraDakuon[y].length; x++) {
        hiraDakuon[y][x].splice(3, 0, "h2");
        hiraDakuon[y][x].push([x, y]);
    }
}
for (let y = 0; y < kataNorm.length; y++) {
    for (let x = 0; x < kataNorm[y].length; x++) {
        kataNorm[y][x].splice(3, 0, "k1");
        kataNorm[y][x].push([x, y]);
    }
}
for (let y = 0; y < kataDakuon.length; y++) {
    for (let x = 0; x < kataDakuon[y].length; x++) {
        kataDakuon[y][x].splice(3, 0, "k2");
        kataDakuon[y][x].push([x, y]);
    }
}
for (let y = 0; y < words.length; y++) {
    for (let x = 0; x < words[y].length; x++) {
        words[y][x].splice(3, 0, "j");
        words[y][x].push([x, y]);
    }
}


console.log(hiraNorm);

var activeChars = [];

var errorList = [];

var totalChars = 0;
var correctChars = 0;

//var currIndex = [0, 0, 0];
var currChar = ["", "", "", [], true, -1]; // 0 == index in acticeChars list
var showingAnswer = false;
var reversed = false;
var showingOptions = false;
getActiveChars();
getRandWord();
makeButtons();
buttonPressed();

function buttonPressed(x, y, name) {
    var selectedBoxShadow = "inset 3px -3px 8px #252527, inset -3px 3px 8px #080808";
    var boxShadow = "-5px 10px 15px #080808, inset 5px -10px 8px #080808, inset -5px 5px 5px #1c1c1e";

    if (name == "h1") {
        var button = document.getElementById("hiraNorm" + x + "," + y);
        hiraNorm[y][x][2] = !hiraNorm[y][x][2];
        if (hiraNorm[y][x][2])
            button.style.boxShadow = boxShadow; 
        else
            button.style.boxShadow = selectedBoxShadow;
    } else if (name == "h2") {
        var button = document.getElementById("hiraDakuon" + x + "," + y);
        hiraDakuon[y][x][2] = !hiraDakuon[y][x][2];
        if (hiraDakuon[y][x][2])
            button.style.boxShadow = boxShadow; 
        else
            button.style.boxShadow = selectedBoxShadow;
    } else if (name == "k1") {
        var button = document.getElementById("kataNorm" + x + "," + y);
        kataNorm[y][x][2] = !kataNorm[y][x][2];
        if (kataNorm[y][x][2])
            button.style.boxShadow = boxShadow; 
        else
            button.style.boxShadow = selectedBoxShadow;
    } else if (name == "k2") {
        var button = document.getElementById("kataDakuon" + x + "," + y);
        kataDakuon[y][x][2] = !kataDakuon[y][x][2];
        if (kataDakuon[y][x][2])
            button.style.boxShadow = boxShadow; 
        else
            button.style.boxShadow = selectedBoxShadow;
    } else if (name == "j") {
        var button = document.getElementById("words" + x + "," + y);
        words[y][x][2] = !words[y][x][2];
        if (words[y][x][2])
            button.style.boxShadow = boxShadow; 
        else
            button.style.boxShadow = selectedBoxShadow;
    }
}

function clearButton(name) {
    if (name == "h1") {
        for (let y = 0; y < hiraNorm.length; y++) {
            for (let x = 0; x < hiraNorm[y].length; x++) {
                buttonPressed(x, y, name);
            }
        }
    } else if (name == "h2") {
        for (let y = 0; y < hiraDakuon.length; y++) {
            for (let x = 0; x < hiraDakuon[y].length; x++) {
                buttonPressed(x, y, name);
            }
        }
    } else if (name == "k1") {
        for (let y = 0; y < kataNorm.length; y++) {
            for (let x = 0; x < kataNorm[y].length; x++) {
                buttonPressed(x, y, name);
            }
        }
    } else if (name == "k2") {
        for (let y = 0; y < kataDakuon.length; y++) {
            for (let x = 0; x < kataDakuon[y].length; x++) {
                buttonPressed(x, y, name);
            }
        }
    } else if (name == "j") {
        console.log("clearing");
        for (let y = 0; y < words.length; y++) {
            for (let x = 0; x < words[y].length; x++) {
                buttonPressed(x, y, name);
            }
        }
    }
}

function makeButtons() {
    var buttonSize = "42px";

    // hiragana
    for (let y = 0; y < hiraNorm.length; y++) {
        var tr = document.createElement("tr");
        var buttonHolder = document.getElementById("normalHiraganaTable");
        buttonHolder.appendChild(tr);
        for (let x = 0; x < hiraNorm[y].length; x++) {
            var element = document.createElement("button");
            element.onclick = function() {buttonPressed(x, y, "h1")};
            element.id = "hiraNorm" + x + "," + y;
            element.style.width = buttonSize;
            element.style.height = buttonSize;
            element.innerHTML = hiraNorm[y][x][0];
            buttonHolder.appendChild(element);
        }
    }

    for (let y = 0; y < hiraDakuon.length; y++) {
        var tr = document.createElement("tr");
        var buttonHolder = document.getElementById("dakuonHiraganaTable");
        buttonHolder.appendChild(tr);
        for (let x = 0; x < hiraDakuon[y].length; x++) {
            var element = document.createElement("button");
            element.onclick = function() {buttonPressed(x, y, "h2")};
            element.id = "hiraDakuon" + x + "," + y;
            element.style.width = buttonSize;
            element.style.height = buttonSize;
            element.innerHTML = hiraDakuon[y][x][0];
            buttonHolder.appendChild(element);
        }
    }

    // katakana
    for (let y = 0; y < kataNorm.length; y++) {
        var tr = document.createElement("tr");
        var buttonHolder = document.getElementById("normalKatakanaTable");
        buttonHolder.appendChild(tr);
        for (let x = 0; x < kataNorm[y].length; x++) {
            var element = document.createElement("button");
            element.onclick = function() {buttonPressed(x, y, "k1")};
            element.id = "kataNorm" + x + "," + y;
            element.style.width = buttonSize;
            element.style.height = buttonSize;
            element.innerHTML = kataNorm[y][x][0];
            buttonHolder.appendChild(element);
        }
    }

    for (let y = 0; y < kataDakuon.length; y++) {
        var tr = document.createElement("tr");
        var buttonHolder = document.getElementById("dakuonKatakanaTable");
        buttonHolder.appendChild(tr);
        for (let x = 0; x < kataDakuon[y].length; x++) {
            var element = document.createElement("button");
            element.onclick = function() {buttonPressed(x, y, "k2")};
            element.id = "kataDakuon" + x + "," + y;
            element.style.width = buttonSize;
            element.style.height = buttonSize;
            element.innerHTML = kataDakuon[y][x][0];
            buttonHolder.appendChild(element);
        }
    }

    // japanese words
    for (let y = 0; y < words.length; y++) {
        var buttonHolder = document.getElementById("wordsTable");
        var text = document.createElement("h3");
        text.innerHTML = "lesson: " + (y + 1);
        var br = document.createElement("br");
        buttonHolder.appendChild(br);
        buttonHolder.appendChild(text);
        var tr = document.createElement("tr");
        buttonHolder.appendChild(tr);
        for (let x = 0; x < words[y].length; x++) {
            var element = document.createElement("button");
            element.onclick = function() {buttonPressed(x, y, "j")};
            element.id = "words" + x + "," + y;
            element.style.height = buttonSize;
            element.innerHTML = words[y][x][0];
            buttonHolder.appendChild(element);
        }
    }
}

function optionMenu() {
    showingOptions = !showingOptions;
    totalChars = 0;
    correctChars = 0;
    document.getElementById("score").innerHTML = correctChars + "/" + totalChars;
    currChar[5] = -1;
    console.log("curr char -1");

    var menu = document.getElementById("menu");
    if (showingOptions) {
        menu.style.visibility = "visible";
        console.log("showing options");
    } else {
        menu.style.visibility = "hidden";
        getActiveChars();
        currChar = ["", "", "", [], false, -1];
        getRandWord();
        console.log(activeChars);
        console.log("hiding options");
    }
}

function reverse() {
    reversed = document.getElementById("reverseBox").checked;

    if (!showingAnswer) {
        if (!reversed)
            index = 0;
        else
            index = 2;
    } else {
        if (!reversed)
            index = 2;
        else
            index = 0;
    }

    var text = document.getElementById("text");
    text.innerHTML = currChar[index];
}

function showAnswer() {

    showingAnswer = !showingAnswer;

    var index = 0;
    if (!showingAnswer) {
        if (!reversed)
            index = 0;
        else
            index = 1;
    } else {
        if (!reversed)
            index = 1;
        else
            index = 0;
    }

    console.log(showingAnswer);

    var text = document.getElementById("text");
    text.innerHTML = currChar[index];
}

function correct() {
    getRandWord();
    if (activeChars.length > 0) {
        totalChars++;
        correctChars++;
        document.getElementById("score").innerHTML = correctChars + "/" + totalChars;
    }
}

function wrong() {
    errorList.push(currChar);
    console.log(errorList);
    getRandWord();
    if (activeChars.length > 0) {
        totalChars++;
        document.getElementById("score").innerHTML = correctChars + "/" + totalChars;
    }
}

function getRandWord() {
    if (activeChars.length > 1) {
        console.log(currChar);
        if (currChar[5] != -1) {
            console.log("splicing");
            activeChars.splice(currChar[5], 1);
            console.log("removing index: " + currChar[5])
        }
        console.log(activeChars);
        console.log(currChar[5]);
        
        showingAnswer = false;
        var randIndex = getRand(0, activeChars.length);
        currChar = activeChars[randIndex];
        currChar[5] = randIndex;
        console.log(currChar);
        var cardText = document.getElementById("text");
        var showNum = 0;
        if (reversed) {
            showNum = 1;
            document.getElementById("typeText").innerHTML = otherCharActive(currChar);
        }

        text.innerHTML = currChar[showNum];
    } else {
        if (currChar[5] != -1) {
            errorList.splice(currChar[5], 1);
            console.log("removing index: " + currChar[5])
        }
        console.log(errorList);
        console.log(currChar[5]);
        
        showingAnswer = false;
        var randIndex = getRand(0, errorList.length);

        currChar = errorList[randIndex];
        currChar[5] = randIndex;

        console.log(currChar);
        var cardText = document.getElementById("text");
        var showNum = 0;
        if (reversed) {
            showNum = 1;
            document.getElementById("typeText").innerHTML = otherCharActive(currChar);
        }
        
        text.innerHTML = currChar[showNum];
    }
}

// tests to see for example if あ and ア are both active and returns true
function otherCharActive(currChar) {
    let x = currChar[4][0];
    let y = currChar[4][1];
    if (currChar[3] == "h1") {
        if (kataNorm[y][x][2])
            return "Hiragana";
        else
            return "";
    } else if (currChar[3] == "h2") {
        if (kataDakuon[y][x][2])
            return "Hiragana";
        else
            return "";
    } else if (currChar[3] == "k1") {
        if (hiraNorm[y][x][2])
            return "Katakana";
        else
            return "";
    } else if (currChar[3] == "k2") {
        if (hiraDakuon[y][x][2])
            return "Katakana";
        else
            return "";
    }else if (currChar[3] == "j") {
        return "";
    }
}

// make a list that includes all of the active characters
function getActiveChars() {
    activeChars = [];
    console.log("getting length");
    for (let y = 0; y < hiraNorm.length; y++) {
        for (let x = 0; x < hiraNorm[y].length; x++) {
            if (hiraNorm[y][x][2] == true) {
                activeChars.push(hiraNorm[y][x]);
            }
        }
    }

    for (let y = 0; y < hiraDakuon.length; y++) {
        for (let x = 0; x < hiraDakuon[y].length; x++) {
            if (hiraDakuon[y][x][2] == true)
                activeChars.push(hiraDakuon[y][x]);
        }
    }

    for (let y = 0; y < kataNorm.length; y++) {
        for (let x = 0; x < kataNorm[y].length; x++) {
            if (kataNorm[y][x][2] == true) {
                activeChars.push(kataNorm[y][x]);
            }
        }
    }

    for (let y = 0; y < kataDakuon.length; y++) {
        for (let x = 0; x < kataDakuon[y].length; x++) {
            if (kataDakuon[y][x][2] == true)
                activeChars.push(kataDakuon[y][x]);
        }
    }

    for (let y = 0; y < words.length; y++) {
        for (let x = 0; x < words[y].length; x++) {
            if (words[y][x][2] == true)
                activeChars.push(words[y][x]);
        }
    }
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}