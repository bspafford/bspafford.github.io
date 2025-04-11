var board = [[["bc",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["be",  0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["bcsi",   90], ["bcs",   90], ["be",   0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["bc",   90]],
             [["be", 270], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["be", 270], "p", ["c",    0], ["e",    0], ["e",    0], ["c",   90], "p", ["c",   0], ["e",    0], ["e",    0], ["e",    0], ["c",   90], "p", ["e",    270], ["e",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["c",  90], "p", ["be",   90]],
             [["be", 270], "pp", ["e",  270], " ", " ", ["e",   90], "p", ["e", 270], " ", " ", " ", ["e",   90], "p", ["e", 270], ["e",    90], "p", ["e", 270], " ", " ", " ", ["e",    90], "p", ["e", 270], " ", " ", ["e",    90], "pp", ["be",   90]],
             [["be", 270], "p", ["c",  270], ["e",  180], ["e",  180], ["c",  180], "p", ["c", 270], ["e",  180], ["e",  180], ["e",  180], ["c", 180], "p", ["c",    270], ["c",    180], "p", ["c",    270], ["e",    180], ["e",    180], ["e",    180], ["c",    180], "p", ["c",    270], ["e",    180], ["e",    180], ["c",    180], "p", ["be",   90]],
             [["be", 270], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["be", 270], "p", ["c",    0], ["e",    0], ["e",    0], ["c",   90], "p", ["c",   0], ["c",   90], "p", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["c",    0], ["c",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["be",   90]],
             [["be", 270], "p", ["c",  270], ["e",  180], ["e",  180], ["c",  180], "p", ["e", 270], ["e",   90], "p", ["c",    270], ["e",    180], ["e",    180], ["lc",    90], ["lc",    0], ["e",    180], ["e",    180], ["c",    180], "p", ["e",    270], ["e",    90], "p", ["c",    270], ["e",    180], ["e",    180], ["c",    180], "p", ["be",   90]],
             [["be", 270], "p", "p", "p", "p", "p", "p", ["e", 270], ["e",   90], "p", "p", "p", "p", ["e", 270], ["e",    90], "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["bc", 270], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["c",   90], "p", ["e", 270], ["lc",  270], ["e",    0], ["e",    0], ["c",   90], " ", ["e",    270], ["e",    90], " ", ["c",    0], ["e",    0], ["e",    0], ["lc",    180], ["e",    90], "p", ["c",    0], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["bc", 180]],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["lc",    0], ["e",  180], ["e",  180], ["c",  180], " ", ["c",    270], ["c",    180], " ", ["c",    270], ["e",    180], ["e",    180], ["lc",    90], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["e",   90], " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ["e",    270], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["e",   90], " ", ["c",    0], ["be",    180], ["be",    180], ["be",    180], ["be",    180], ["be",    180], ["be",    180], ["c",    90], " ", ["e",    270], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [["be",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["c",  180], "p", ["c", 270], ["c",  180], " ", ["be",    90], " ", " ", " ", " ", " ", " ", ["be",    270], " ", ["c",    270], ["c",    180], "p", ["c", 270], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0]],
             [" ", " ", " ", " ", " ", " ", "p", " ", " ", " ", ["be",    90], " ", " ", " ", " ", " ", " ", ["be",    270], " ", " ", " ", "p", " ", " ", " ", " ", " ", " "],
             [["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["c",   90], "p", ["c",   0], ["c",    90], " ", ["be",    90], " ", " ", " ", " ", " ", " ", ["be",    270], " ", ["c",    0], ["c",    90], "p", ["c",    0], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180]],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["e",   90], " ", ["c",    270], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["c",    180], " ", ["e",    270], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["e",   90], " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ["e",    270], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [" ", " ", " ", " ", " ", ["be", 270], "p", ["e", 270], ["e",   90], " ", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], " ", ["e",    270], ["e",    90], "p", ["be",   90], " ", " ", " ", " ", " "],
             [["bc",   0], ["be",   0], ["be",   0], ["be",   0], ["be",   0], ["c", 180], "p", ["c",    270], ["c",    180], " ", ["c",    270], ["e",    180], ["e",    180], ["lc",    90], ["lc",    0], ["e",    180], ["e",    180], ["c",    180], " ", ["c",    270], ["c",    180], "p", ["c", 270], ["be",    0], ["be",    0], ["be",    0], ["be",    0], ["bc",   90]],
             [["be", 270], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["be", 270], "p", ["c",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["c",    0], ["e",   0], ["e",    0], ["e",    0], ["c",    90], "p", ["e",    270], ["e",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["be",   90]],
             [["be", 270], "p", ["c",    270], ["e",    180], ["lc",    90], ["e",    90], "p", ["c",    270], ["e",   180], ["e",    180], ["e",    180], ["c",    180], "p", ["c",    270], ["c",    180], "p", ["c",    270], ["e",    180], ["e",    180], ["e",    180], ["c",    180], "p", ["e",    270], ["lc",    0], ["e",    180], ["c",    180], "p", ["be",   90]],
             [["be", 270], "pp", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", "p", "p", "p", " ", " ", "p", "p", "p", "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "pp", ["be",   90]],
             [["bcs", 0], ["e",    0], ["c",    90], "p", ["e",    270], ["e",    90], "p", ["c",    0], ["c",   90], "p", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["c",    0], ["c",    90], "p", ["e",    270], ["e",    90], "p", ["c",    0], ["e",    0], ["bcsi",   180]],
             [["bcsi", 0], ["e",    180], ["c",    180], "p", ["c",    270], ["c",    180], "p", ["e",    270], ["e",   90], "p", ["c",    270], ["e",    180], ["e",    180], ["lc",    90], ["lc",    0], ["e",    180], ["e",    180], ["c",    180], "p", ["e",    270], ["e",    90], "p", ["c",    270], ["c",    180], "p", ["c",    270], ["e",    180], ["bcs",   180]],
             [["be", 270], "p", "p", "p", "p", "p", "p", ["e",    270], ["e",   90], "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", ["e",    270], ["e",    90], "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["be", 270], "p", ["c",    0], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["lc",    180], ["lc",   270], ["e",    0], ["e",    0], ["c",    90], "p", ["e",    270], ["e",    90], "p", ["c",    0], ["e",    0], ["e",    0], ["lc",    180], ["lc",    270], ["e",    0], ["e",    0], ["e",    0], ["e",    0], ["c",    90], "p", ["be",   90]],
             [["be", 270], "p", ["c",    270], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",   180], ["e",    180], ["e",    180], ["c",    180], "p", ["c",    270], ["c",    180], "p", ["c",    270], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["e",    180], ["c",    180], "p", ["be",   90]],
             [["be", 270], "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", ["be",   90]],
             [["bc", 270], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["be", 180], ["bc", 180]]]
// make the board pictures depending on what walls are around it

let fps = 60;
let deltaTime = 1/fps;

let pacmanSpeed = 88/fps; // * 3
let ghostSpeed = 88/fps; // * 3

let pacmanLoc = [];
let blinkyLoc = [];

let boxSize = 24;
            // last x, last y
let prevMovePacman = [];
let prevMove = [];

let currDir = [0, 0];

let score = 0;

let pacmanAnim = ["images/pacman.png", "images/pacman1.png", "images/pacman2.png", "images/pacman1.png"];
let pacmanAnimNum = 0;
let ghostAnimNum = 1;

// moves 11 spots a second
// 88 px a second
// ghost speed is how far to move each frame
// it takes 1/11 of a second to move to new spot
let timer = 1/11;
let time = 0;

let pacmanTimer = 1/11;
let pacmanTime = 0;

setupBoard();

document.addEventListener('keydown', function(event) {
    let pacman = document.getElementById("pacman");
    let coords = pacmanLoc;
    if (event.key == "w" && [" ", "p", "pp"].includes(board[coords[1] - 1][coords[0]][0])) {
        currDir = [0, -1];
    } else if (event.key == "s" && [" ", "p", "pp"].includes(board[coords[1] + 1][coords[0]][0])) {
        currDir = [0, 1];
    } else if (event.key == "a" && [" ", "p", "pp"].includes(board[coords[1]][coords[0] - 1][0])) {
        currDir = [-1, 0];
    } else if (event.key == "d" && [" ", "p", "pp"].includes(board[coords[1]][coords[0] + 1][0])) {
        currDir = [1, 0];
    }
});

window.setInterval(pathFind, deltaTime * 1000);
window.setInterval(movePacman, deltaTime * 1000);
window.setInterval(pacmanAnimation, 1/15 * 1000);
//window.setInterval(ghostAnimation, 1/4 * 1000);

//window.setInterval(pathFind, 125);
//window.setInterval(movePacman, 125);

//movePacman();

for (let i = 0; i < 1; i++) {
    //pathFind();
}

function setupBoard() {
    let boardTable = document.getElementById("boardTable");
    
    for (let y = 0; y < board.length; y++) {
        let tr = document.createElement("tr");
        boardTable.appendChild(tr);
        for (let x = 0; x < board[y].length; x++) {
            let th = document.createElement("th");
            tr.appendChild(th);
            
            if (board[y][x][0] == "be" || board[y][x][0] == "bc" || board[y][x][0] == "e" || board[y][x][0] == "c" || board[y][x][0] == "lc" || board[y][x][0] == "bcs" || board[y][x][0] == "bcsi") {
                //imageStuff = calcBoardImage(x, y);
                let img = document.createElement("img");
                img.src = "images/" + board[y][x][0] + ".png";
                img.style.transform = "rotate(" + board[y][x][1] + "deg)";
                img.style.width = "24px";
                img.style.imageRendering = "pixelated";
                th.appendChild(img);
            } else if (board[y][x] == "p" || board[y][x] == "pp") {
                let img = document.createElement("img");
                img.id = "pellet";
                img.src = "images/" + board[y][x] + ".png";
                th.appendChild(img);
            }

        }
    }

// pacman
    let pacmanDiv = document.createElement("img");
    pacmanDiv.id = "pacman";
    pacmanDiv.src = "images/pacman1.png";
    //pacmanDiv.style.borderRadius = "100px";
    
    // starting coords
    pacmanDiv.style.top = boardTable.getBoundingClientRect().top + (boxSize * 23) - 7.5 + 4; // 23
    pacmanDiv.style.left = boardTable.getBoundingClientRect().left + (boxSize * 13) - 7.5; // 13
    pacmanLoc = [13, 23];

    document.body.appendChild(pacmanDiv);
    
    // blinky
    let blinkyDiv = document.createElement("img");
    blinkyDiv.id = "blinky";
    blinkyDiv.src = "images/blinky/blinky11.png";
    
    // starting coords
    blinkyDiv.style.top = boardTable.getBoundingClientRect().top + (boxSize * 11) - 7.5 + 4; // 11 13
    blinkyDiv.style.left = boardTable.getBoundingClientRect().left + (boxSize * 13) - 7.5;
    blinkyLoc = [13, 11];
    
    document.body.appendChild(blinkyDiv);

}

// returns image with rotation
function calcBoardImage(x, y) {
                // left down right up
    let sidesX = [-1, 0, 1, 0];
    let sidesY = [0, 1, 0, -1];

    var sides = [];
    for (let i = 0; i < 4; i++) {
        let dirX = x + sidesX[i];
        let dirY = y + sidesY[i];
        
        // if within bounds, otherwise its nothing
        if (dirX >= 0 && dirY >= 0 && dirY < board.length && dirX < board[dirY].length && board[dirY][dirX] == "w")
            sides.push(true);
        else
            sides.push(false);
    }

    // horizontal walls
    if (sides[0] && sides[2]) {
        if (y == 0)
            return ["images/borderEdge.png", 0];
        else if (y == board.length - 1)
            return ["images/borderEdge.png", 180];
        else 
            return ["images/edge.png", 0];

    // vertical walls
    } else if (sides[1] && sides[3]) {
        if (x == 0)
            return ["images/borderEdge.png", 270];
        else if (x == board[0].length - 1)
            return ["images/borderEdge.png", 90];
        else 
            return ["images/edge.png", 90];

    // top right
    } else if (sides[0] && sides[1]) {
        if (x == board[x].length - 1)
            return ["images/borderCorner.png", 90];
        else
            return ["images/corner.png", 90];
    
    // top left
    } else if (sides[1] && sides[2]) {
        if (x == 0)
            return ["images/borderCorner.png", 0];
        else
            return ["images/corner.png", 0];
    
    // bottom left
    } else if (sides[2] && sides[3]) {
        if (x == 0)
            return ["images/borderCorner.png", 270];
        return ["images/corner.png", 270];

    // bottom right
    } else if (sides[3] && sides[0]) {
        if (x == board[0].length - 1)
            return ["images/borderCorner.png", 180];
        else
            return ["images/corner.png", 180];
    }







    // return an img
    return ["images/borderCorner.png", 0];
}

function movePacman() {
    let boardTable = document.getElementById("boardTable");
    let pacman = document.getElementById("pacman");
    let x = currDir[0] + pacmanLoc[0];
    let y = currDir[1] + pacmanLoc[1];

    pacmanTime += deltaTime;
    if (pacmanTime >= pacmanTimer) {
        pacmanTime -= pacmanTimer;
        prevMovePacman = pacmanLoc;
        if (board[y][x] == " " || board[y][x] == "p" || board[y][x] == "pp") {
            pacmanLoc = [x, y];
            if (currDir[0] == 1)
                pacman.style.transform = "rotate(0deg)";
            else if (currDir[0] == -1)
                pacman.style.transform = "rotate(180deg)";
            else if (currDir[1] == 1)
                pacman.style.transform = "rotate(90deg)";
            else if (currDir[1] == -1)
                pacman.style.transform = "rotate(270deg)";
            //pacman.style.left = coords[0];
            //pacman.style.top = coords[1];
            
            // The Pac-Man game runs at 60 FPS, so I suppose you could count the frames if need be. Note that Pac-Man, the character, pauses for 1 frame every time he eats a pellet, and for 3 frames when he eats a power pellet.
            if (board[y][x] == "p")
                score += 10;
            else if (board[y][x] == "pp")
                score += 50;
            
            let scoreText = document.getElementById("score");
            if (score == 0)
                scoreText.innerHTML = "00";
            else
            scoreText.innerHTML = score;
        
        board[y][x] = " ";
        //let boardTable = document.getElementById("boardTable");
        if (boardTable.childNodes[y].childNodes[x].hasChildNodes())
            boardTable.childNodes[y].childNodes[x].childNodes[0].remove();
        
        }
    }

    
    // lerp ghost between current location and where its going
    let pacX = pacmanLoc[0] - prevMovePacman[0];
    let pacY = pacmanLoc[1] - prevMovePacman[1];

    let percent = time / timer; // lerp x

    let coords = boardToCoords(prevMovePacman[0] + percent * pacX, prevMovePacman[1] + percent * pacY)

    pacman.style.left = coords[0];
    pacman.style.top = coords[1];
}

function pacmanAnimation() {


        if (pacmanLoc != prevMovePacman) {
        let pacman = document.getElementById("pacman");
        pacman.src = pacmanAnim[pacmanAnimNum];
        pacmanAnimNum++;
        if (pacmanAnimNum > pacmanAnim.length - 1)
            pacmanAnimNum = 0;
    }
}

function ghostAnimation() {
    let blinky = document.getElementById("blinky");

    let x = blinkyLoc[0] - prevMove[0];
    let y = blinkyLoc[1] - prevMove[1];

    // [-1, 0, 1, 0];
    // [0, 1, 0, -1];
    let eyeNum = 1;
    if (x == -1 &&  y == 0) {
        eyeNum = 1;
    } else if (x == 0 && y == 1) {
        eyeNum = 4;
    } else if (x == 1 && y == 0) {
        eyeNum = 3;
    } else if (x == 0 && y == -1) {
        eyeNum = 2;
    }

    blinky.src = "images/blinky/blinky" + eyeNum + ghostAnimNum + ".png";
    ghostAnimNum++;
    if (ghostAnimNum > 2)
        ghostAnimNum = 1;
}

function pathFind() {
    let pacman = document.getElementById("pacman");
    let blinky = document.getElementById("blinky");

    ghostAnimation();

    time += deltaTime;
    if (time >= timer) {
        time -= timer; // instead of setting to 0, better i think
        
        // x, y, distance
        var bestLoc = [];

        let sidesX = [-1, 0, 1, 0];
        let sidesY = [0, 1, 0, -1];
        //let boardCoords =  //coordsToBoard(blinkyLoc.getBoundingClientRect());

        for (let i = 0; i < 4; i++) {
            let x = blinkyLoc[0] + sidesX[i];
            let y = blinkyLoc[1] + sidesY[i];
        
            let distance = calcDistance(pacman, x, y);

            let bool = board[y][x][0] != "be" && board[y][x][0] != "bc" && board[y][x][0] != "e" && board[y][x][0] != "c" && board[y][x][0] != "lc" && board[y][x][0] != "bcs" && board[y][x][0] != "bcsi";
            if ((x != prevMove[0] || y != prevMove[1]) && bool) {
                if (bestLoc.length == 0) {
                    bestLoc = [x, y, distance];
                } else if (distance < bestLoc[2]) {
                        bestLoc = [x, y, distance];
                }
            }
        }
        
        prevMove = blinkyLoc;
        blinkyLoc = bestLoc;
    }


    
    let newLoc = boardToCoords(blinkyLoc[0], blinkyLoc[1]);

    // lerp ghost between current location and where its going
    let x = blinkyLoc[0] - prevMove[0];
    let y = blinkyLoc[1] - prevMove[1];

    let percent = time / timer; // lerp x

    let coords = boardToCoords(prevMove[0] + percent * x, prevMove[1] + percent * y)

    blinky.style.left = coords[0];
    blinky.style.top = coords[1];
}

/* path find backup
function pathFind() {
    let pacman = document.getElementById("pacman");
    let blinky = document.getElementById("blinky");
    
    //console.log("hello");
    //blinky.style.left = blinky.getBoundingClientRect().left + 1.46666666667 * 3;
    //console.log(coordsToBoard2(blinky.getBoundingClientRect()));
    //return;
    // x, y, distance
    var bestLoc = [];

    let sidesX = [-1, 0, 1, 0];
    let sidesY = [0, 1, 0, -1];
    let boardCoords = coordsToBoard(blinky.getBoundingClientRect());

    for (let i = 0; i < 4; i++) {
        let x = boardCoords[0] + sidesX[i];
        let y = boardCoords[1] + sidesY[i];
    
        let distance = calcDistance(pacman, x, y);

        let bool = board[y][x][0] != "be" && board[y][x][0] != "bc" && board[y][x][0] != "e" && board[y][x][0] != "c" && board[y][x][0] != "lc" && board[y][x][0] != "bcs" && board[y][x][0] != "bcsi";
        if ((x != prevMove[0] || y != prevMove[1]) && bool) {
            if (bestLoc.length == 0) {
                bestLoc = [x, y, distance];
            } else if (distance < bestLoc[2]) {
                    bestLoc = [x, y, distance];
            }
        }
    }

    prevMove = boardCoords;
    let newLoc = boardToCoords(bestLoc[0], bestLoc[1])
    blinky.style.top = newLoc[1];
    blinky.style.left = newLoc[0];
}
*/

function calcDistance(pacman, blinkyX, blinkyY) {
    let pacmanBoardCoords = coordsToBoard(pacman.getBoundingClientRect());
    let x = pacmanBoardCoords[0] - blinkyX;
    let y = pacmanBoardCoords[1] - blinkyY;
    
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function coordsToBoard(rect) {
    let boardTable = document.getElementById("boardTable");
    let y = (rect.top - boardTable.getBoundingClientRect().top + 7.5) / boxSize;

    let x = (rect.left - boardTable.getBoundingClientRect().left + 7.5) / boxSize;
    return [x, y];
}

function boardToCoords(x, y) {
    let boardTable = document.getElementById("boardTable");
    let coordY = boardTable.getBoundingClientRect().top + (boxSize * y) - 7.5;
    let coordX = boardTable.getBoundingClientRect().left + (boxSize * x) - 7.5;
    return [coordX, coordY];
    
}