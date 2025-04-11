const input = document.getElementById("weightInput");
const inputValue = input.value;

var plates = [45, 25, 10, 5, 2.5];
var platesColor = ["#000070", "#007000", "#505050", "#000099", "000000"];

makePlate(plates[0], platesColor[0]);
makePlate(plates[1], platesColor[1]);
makePlate(plates[2], platesColor[2]);
makePlate(plates[3], platesColor[3]);
makePlate(plates[4], platesColor[4]);

document.getElementById("myForm").addEventListener("submit", function (e) {
    
    e.preventDefault();
    
    var weightWindow = document.getElementById("weightWindow")
    weightWindow.innerHTML = '';

    var total = input.value - 45;
    var index = 0;
    while(total > plates[plates.length - 1]) {
        console.log(total + ", " + plates[index]);
        if (total - (plates[index] * 2) >= 0) {
            total -= plates[index] * 2;
            console.log(plates[index]);
            makePlate(plates[index], platesColor[index]);

        } else if (index < plates.length - 1) {
            index++;
        } else {
            console.log("nope");
            break;
        }
    }
  });

function makePlate(plateNum, color) {
    var div = document.createElement("div");
    div.id = "weightDiv";
    div.style.backgroundColor = color;
    div.style.border = "1px solid black";
    div.style.height = calcWeightHeight(plateNum) + "%";
    if (plateNum > 10)
        div.style.width = (plateNum * 2) + "px";
    div.style.position = "relative";
    div.style.top = "50%";
    div.style.transform = "translate(0, -50%)";
    div.style.textAlign = "center";


    var num = document.createElement("h2");
    num.innerHTML = plateNum;
    num.style.position = "relative";
    num.style.top = "50%";
    num.style.left = "50%";
    num.style.transform = "translate(-50%, -50%)";
    num.style.margin = "0px";

    document.getElementById("weightWindow").appendChild(div);
    div.appendChild(num);
}

function calcWeightHeight(plateNum) {
    var percent = plateNum / plates[0] * 100;
    return percent;
}