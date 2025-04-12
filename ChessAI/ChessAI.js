let WIDTH = 800;
let HEIGHT = 800;
let DIMENSION = 8;
let SQ_SIZE = HEIGHT / DIMENSION;
let pieceOffset = (100, 50);

// starting spot of the board
WhiteBoard = [["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
              ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
              ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]];

BlackBoard = [["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
              ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
              ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"]];

testBoard = [["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "bQ", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "bN", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "wK"],
              ["--", "--", "--", "--", "bK", "--", "--", "--"]];

castleTest = [["bR", "--", "--", "--", "--", "--", "--", "bR"],
              ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "--", "--", "wQ", "--"],
              ["--", "--", "--", "--", "--", "--", "--", "--"],
              ["--", "--", "--", "--", "wN", "--", "--", "--"],
              ["--", "--", "wP", "wP", "wP", "wP", "--", "--"],
              ["wR", "--", "--", "--", "wK", "--", "--", "wR"]];

staleMateBoard = [["--", "--", "wN", "--", "--", "--", "--", "--"],
            ["--", "--", "--", "--", "--", "--", "wQ", "--"],
            ["--", "--", "--", "--", "bK", "--", "--", "--"],
            ["--", "--", "wP", "--", "--", "--", "--", "--"],
            ["--", "--", "--", "--", "wP", "--", "--", "--"],
            ["--", "--", "--", "--", "--", "--", "--", "--"],
            ["wP", "wP", "wP", "--", "--", "wP", "wP", "wP"],
            ["wR", "--", "--", "--", "wK", "--", "--", "wR"]]; // move pawn to test

let startingBoard = WhiteBoard //testBoard

var moveLog = [] // == move from, move to, piece moved id, piece captured name and id
var moveLogIndex = 0

let white = true;
let turn = true;
let playingVSHuman = true // if false then go against ai
let canChangeMoves = true

boardColors = ["#eeeed2", "#769656"];
let text = "";

let isMoving = false;

var boardContainer = document.getElementById('boardContainer').getBoundingClientRect();

let offX = boardContainer.left + SQ_SIZE / 2;
let offY = boardContainer.top + SQ_SIZE / 2;

var Pins = []
var Checks = []
var InCheck = false
var whiteKingLocation = []
var blackKingLocation = []

var canMove = true
var validMoves = []
var moves = []
// setup piecesList
let piecesList = [...Array(8)].map(e => Array(8));

for (let row = 0; row < DIMENSION; row++) {
    for (let col = 0; col < DIMENSION; col++) {

        if (startingBoard[row][col] == "wK") {
            whiteKingLocation = [row, col]
        } else if (startingBoard[row][col] == "bK") {
            blackKingLocation = [row, col]
        }

        if (startingBoard[row][col] != "--")
                                    // location of piece, id of the piece,                      has the piece moved
            piecesList[row][col] = [startingBoard[row][col], startingBoard[row][col] + row + col, false]
        else
            piecesList[row][col] = ["--", "--", "--"]
    }
}

var lineStartLoc = []

validMoves = getValidMoves()
var selected = ""

window.addEventListener('mousemove', (event) => {
    if (isMoving)
    {
        follow(event, selected)
    }
})

window.addEventListener('mousedown', (event) => {
    if (event.button == 2) {
        // reset piece is holding one
        if (isMoving) {
            // reset loc
            let piece = selected[2].style //document.getElementById(selected[2]).style;
            piece.left = selected[0] * SQ_SIZE + boardContainer.left - offX + SQ_SIZE / 2
            piece.top = selected[1] * SQ_SIZE + boardContainer.top - offY + SQ_SIZE / 2
            selected[2].style.zIndex = "0"
            isMoving = false

            let navCircles = document.querySelectorAll('[id=navCircle]')
            let takeCircles = document.querySelectorAll('[id=takeCircle]')
            for (let i = 1; i < navCircles.length; i++)
                navCircles[i].remove()
            for (let i = 1; i < takeCircles.length; i++)
                takeCircles[i].remove()
            selected = null
        }else {
        // get the location that mouse goes down if mouse on board that is
        // store it in a variable
        lineStartLoc = convertLocToIndex(event.clientX, event.clientY)
        }
    }
})

window.addEventListener('mouseup', (event) => {
    if (event.button == 0) {
        piecesMouseUp()
    } else if (event.button == 2) {
        // get where the mouse button was release if mouse on board that is
        // get variable and draw line going through the points
        // set the variable back to []

        let lineEndLoc = convertLocToIndex(event.clientX, event.clientY)

        if (lineStartLoc != lineEndLoc) {
            let c = document.getElementById('boardContainer')
            ctx = c.getContext("2d")
            ctx.lineWidth = 15
            ctx.strokeStyle = '#ff0000'
            ctx.beginPath()
            // if not knight moves then {
            ctx.moveTo(lineStartLoc[0] * 100 + SQ_SIZE / 2, lineStartLoc[1] * 100 + SQ_SIZE / 2)
            ctx.lineTo(lineEndLoc[0] * 100 + SQ_SIZE / 2, lineEndLoc[1] * 100 + SQ_SIZE / 2)
            ctx.stroke()
            // } else if knight moves then {
                // ctx.beginPath()
                //ctx.moveTo(lineStartLoc[0] * 100 + SQ_SIZE / 2, lineStartLoc[1] * 100 + SQ_SIZE / 2)
                //ctx.lineTo(lineEndLoc[0] * 100 + SQ_SIZE / 2, lineEndLoc[1] * 100 + SQ_SIZE / 2)
                //ctx.lineTo() // while draw a second line making the bends in the knights path
                //ctx.stroke()
            ctx.closePath()
        }
        lineStartLoc = []
    }
})


window.addEventListener('keypress', (event) => {
    if (event.key == "a") {

        console.log(moveLog)

    } else if (event.key == "b") {
        console.log(piecesList)
    }
})

function follow(evt, selected) {

    // updates offset of object incase user presses f12 or resizes window
    boardContainer = document.getElementById('boardContainer').getBoundingClientRect();
    offX = boardContainer.left + SQ_SIZE / 2;
    offY = boardContainer.top + SQ_SIZE / 2;

    let obj = selected[2].style
    
    if (0 < parseInt(evt.clientX) - offX + 50 && parseInt(evt.clientX) - offX + 50 < SQ_SIZE * DIMENSION)
        obj.left = (parseInt(evt.clientX) - offX) + 'px';
    if (0 < parseInt(evt.clientY) - offY + 50 && parseInt(evt.clientY) - offY + 50 < SQ_SIZE * DIMENSION)
        obj.top = (parseInt(evt.clientY) - offY) + 'px';
}

var c = document.getElementById("boardContainer");
var ctx = c.getContext("2d");

drawGameState()

function drawGameState() {
    drawBoard()
    drawPieces()
}

function drawBoard() {

    let rankNumber = 9
    let fileLetter = 0

    for (let y = 0; y <= DIMENSION; y++) {
        for (let x = 0; x <= DIMENSION; x++) {
            ctx.beginPath();
            color = boardColors[((y+x) % 2)];
            ctx.fillStyle = color;
            ctx.fillRect(x*100, y*100, 100, 100);  
            ctx.stroke();

            // draw numbers
            if (x == 0) {
                rankNumber--
                let boardContainer = document.getElementById('boardContainer')
                let ctx = boardContainer.getContext("2d")
                ctx.fillStyle = boardColors[((y+x+1) % 2)]
                ctx.font = "600 20px Arial"
                ctx.fillText(rankNumber, x * SQ_SIZE + (SQ_SIZE * .06), y * SQ_SIZE + (SQ_SIZE * .25))
            }

            // draw letters
            if (y == 7) {
                fileLetter++
                let boardContainer = document.getElementById('boardContainer')
                let ctx = boardContainer.getContext("2d")
                ctx.fillStyle = boardColors[((y+x+1) % 2)]
                ctx.font = "600 20px Arial"
                ctx.fillText(String.fromCharCode(96 + fileLetter), x * SQ_SIZE + (SQ_SIZE * .84), y * SQ_SIZE + (SQ_SIZE * .93))
            }
        }
    }
}

function drawPieces() {
    
    for (let y = 0; y < DIMENSION; y++) {
        for (let x = 0; x < DIMENSION; x++) {
            if (startingBoard[y][x] != "--") {
                var idTag = startingBoard[y][x] + y + x
                //const element = `<div id=${idTag} onmousedown="piecesMouseDown('${startingBoard[y][x] + y + x}')" onmouseup="piecesMouseUp()" z-index:0 style="position:absolute; left:` + (x * SQ_SIZE) + '; top:' + (y * SQ_SIZE) + ';"><img src="Pieces/' +  startingBoard[y][x] + '.png" draggable="false"></div>';
                const element = `<div id=${idTag} onmousedown="piecesMouseDown('${piecesList[y][x][1]}')" onmouseup="piecesMouseUp()" z-index:0 style="position:absolute; left:` + (x * SQ_SIZE) + '; top:' + (y * SQ_SIZE) + ';"><img src="Pieces/' +  startingBoard[y][x] + '.png" draggable="false"></div>';
                document.querySelector('#images').innerHTML += element;
            }
        }
    }
}

function piecesMouseDown(idTag) {

    // updates offset incase user presses F12
    boardContainer = document.getElementById('boardContainer').getBoundingClientRect();
    offX = boardContainer.left + SQ_SIZE / 2;
    offY = boardContainer.top + SQ_SIZE / 2;

    if (event.button == 0) {
        ctx.clearRect(0, 0, 800, 800)
        drawBoard()
        isMoving = true;
        piece = document.getElementById(idTag).getBoundingClientRect()
        let index = convertLocToIndex(piece.left, piece.top)
        if (turn && ((white && piecesList[index[1]][index[0]][0].charAt(0) == "w") || (!white && piecesList[index[1]][index[0]][0].charAt(0) == "b")))
            calcPieceMovement(index[0], index[1])
        else if (!turn && ((white && piecesList[index[1]][index[0]][0].charAt(0) == "b") || (!white && piecesList[index[1]][index[0]][0].charAt(0) == "w")))
            calcPieceMovement(index[0], index[1])
        selected = index
        selected.push(document.getElementById(idTag))
        selected[2].style.zIndex = "9"

        follow(event, selected);
    }
}

function piecesMouseUp() {
    if (event.button == 0 && isMoving && selected.length > 0)
    {
        isMoving = false;

        let mouseIndex = convertLocToIndex(event.clientX, event.clientY)
        confirmMovement(moves, selected, mouseIndex[0], mouseIndex[1], true)

        // removes the circle markers
        let navCircles = document.querySelectorAll('[id=navCircle]')
        let takeCircles = document.querySelectorAll('[id=takeCircle]')
        for (let i = 1; i < navCircles.length; i++)
            navCircles[i].remove()
        for (let i = 1; i < takeCircles.length; i++)
            takeCircles[i].remove()

        validMoves = [] // clears list
        selected = [] // removes selected object
    }
}

function playVsAI() {
    playingVSHuman = !document.getElementById("checkbox").checked

    if (!turn && playingVSHuman == false) {
        calcAIMovement()
    }
}

function calcPieceMovement(x, y) {

    // dont change past moves
    if (!canChangeMoves && moveLog.length != moveLogIndex) {
        // go back to current board location
        return
    // change past moves
    } else if (canChangeMoves && moveLog.length != moveLogIndex) {
        for (let i = 0; i < moveLog.length - moveLogIndex + 1; i++) {
            moveLog.pop()
        }
    }

    if (!turn && !playingVSHuman) 
        return

    if (!canMove)
        return
    
    // error // doesn't update kings position in time

    Checkmate = false
    Stalemate = false

    validMoves = getValidMoves() // should be get valid moves
    test = validMoves
    
    let tempMoves = []
    moves = []
    switch (piecesList[y][x][0].charAt(1)) {
        case "P":
            piecesMoves = PawnMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }

            // calc en passant
            tempMoves = tempMoves.concat(enPassant(x, y))

            break
        case "R":
            piecesMoves = RookMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }
            break;
        case "N":
            piecesMoves = KnightMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }
            break;
        case "B":
            piecesMoves = BishopMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }
            break;
        case "Q":
            piecesMoves = QueenMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }
            break;
        case "K":
            piecesMoves = KingMovement(x, y)
            for (let i = 0; i < piecesMoves.length; i++) {
                tempMoves = tempMoves.concat([[piecesMoves[i], piecesList[y][x][0]]])
            }
            // calc castling
            if (x == 4) {
                tempMoves = tempMoves.concat(castling(x, y))
            }

            break;
    }
    // if move is in valid moves
    tempMoves.forEach(m => {
        test.forEach(v => {
            if (m[0][0] == v[0][0] && m[0][1] == v[0][1] && piecesList[y][x][0] == v[1]) {
                moves.push(m)
            }
        })
    })

    // show spots to move
    moves.forEach(move => {
        if (piecesList[move[0][0]][move[0][1]][0] == "--") {
            const navCircle = `<div id=${"navCircle"} style = "position:absolute; left:` + (move[0][1] * SQ_SIZE) + '; top:' + (move[0][0] * SQ_SIZE) + ';"><img src="Pieces/navCircle.png" draggable="false"></div>';
            document.querySelector('#navCircle').innerHTML += navCircle;
        } else {
            const takeCircle = `<div id=${"takeCircle"} style = "position:absolute; left:` + (move[0][1] * SQ_SIZE) + '; top:' + (move[0][0] * SQ_SIZE) + ';"><img src="Pieces/takeCircle.png" draggable="false"></div>';
            document.querySelector('#takeCircle').innerHTML += takeCircle;
        }
    })
}

function enPassant(x, y) {
    // if pawn position is in (rank 5 or rank 4) && if last move was a pawn that double moved
    if (moveLog.length > 0) {
        moves = []
        
        let revMove = 1
        if ((white && piecesList[y][x][0].charAt(0) == "b") || (!white && piecesList[y][x][0].charAt(0) == "w")) {revMove = -1}
        allyColor = piecesList[y][x][0].charAt(0)

        lastMove = moveLog[moveLogIndex - 1]

        // if last move was a pawn and it moved a double
        if ((y == 3 || y == 4) && lastMove[2].charAt(1) == "P" && Math.abs(lastMove[0][1] - lastMove[1][1]) == 2) {
            if (x - 1 == lastMove[1][0]) { // if on left
                moves.push([[y - revMove, x - 1], allyColor + "P"])
            } else if (x + 1 == lastMove[1][0]) { // if on right
                moves.push([[y - revMove, x + 1], allyColor + "P"])
            }
        }
        return moves
    }
    return []
}

function castling(x, y) {

    // calc castling
        // if no piece is in the way //
        // if those spots aren't in check
        // if the king and rook havn't moved yet //



    // if king has moved return
    if (piecesList[y][x][2] == true || InCheck)
        return []


    moves = []
    allyColor = piecesList[y][x][0].charAt(0)

    // for king side
    if (piecesList[y][7][2] == false) { // has the piece moved
        if (piecesList[y][5][0] == "--" && piecesList[y][6][0] == "--") { // are the spaces empty            
            if (allyColor == 'w') {
                whiteKingLocation = [y, 5]
                let king5 = checkForPinsAndChecks()
                whiteKingLocation = [y, 6]
                let king6 = checkForPinsAndChecks()
                whiteKingLocation = [y, 4] // reset king loc
                if (!king5[0] && !king6[0]) { // checks if king goes throught check
                    moves.push([[y, 6], "wK"])
                }
            } else {
                blackKingLocation = [y, 5]
                let king5 = checkForPinsAndChecks()
                blackKingLocation = [y, 6]
                let king6 = checkForPinsAndChecks()
                blackKingLocation = [y, 4] // reset king loc
                if (!king5[0] && !king6[0]) { // checks if king goes throught check
                    moves.push([[y, 6], "bK"])
                }
            }
        }
    }
    // for queen side
    if (piecesList[y][0][2] == false) { // has the piece moved
        if (piecesList[y][3][0] == "--" && piecesList[y][2][0] == "--" && piecesList[y][1][0] == "--") { // are the spaces empty
            if (allyColor == 'w') {
                whiteKingLocation = [y, 3]
                let king5 = checkForPinsAndChecks()
                whiteKingLocation = [y, 2]
                let king6 = checkForPinsAndChecks()
                whiteKingLocation = [y, 4] // reset king loc
                if (!king5[0] && !king6[0]) { // checks if king goes throught check
                    moves.push([[y, 2], "wK"])
                }
            } else {
                blackKingLocation = [y, 3]
                let king5 = checkForPinsAndChecks()
                blackKingLocation = [y, 2]
                let king6 = checkForPinsAndChecks()
                blackKingLocation = [y, 4] // reset king loc
                if (!king5[0] && !king6[0]) { // checks if king goes throught check
                    moves.push([[y, 2], "bK"])
                }
            }
        }
    }
    return moves
}

// a simple version of confirm movement to not lag while using the ai
function makeMoveAI(fromXY, toXY) {
// castling

// en passant

// pawn promotion // pic best piece in circum stance

// moving

    moveLogIndex++

    // add to move log
                // from                   to where         what piece moved, did it capture a piece and its id, has moved previously?  
    moveLog.push([fromXY, toXY, piecesList[fromXY[1]][fromXY[0]][1], piecesList[toXY[1]][toXY[0]], piecesList[fromXY[1]][fromXY[0]][2]])

    piecesList[toXY[1]][toXY[0]] = piecesList[fromXY[1]][fromXY[0]]
    piecesList[toXY[1]][toXY[0]][2] = true
    piecesList[fromXY[1]][fromXY[0]] = ["--", "--", "--"]

    // update king pos
    if (piecesList[toXY[1]][toXY[0]][0] == "wK") {
        whiteKingLocation = [toXY[1], toXY[0]]
    } else if (piecesList[toXY[1]][toXY[0]][0] == "bK") {
        blackKingLocation = [toXY[1], toXY[0]]
    }
    
// probably the most unoptimized thing

    turn = !turn
}

// simple undo cause it just needs to change the list a little
function undoAI() {
    // go back through the moveLog
    if (moveLogIndex >= 1) {

        // didn't remove the moves from the move log we dont need to create a move log here since it is just doing and unding moves
        // so all it needs to to keep track of just a few moves
        // it actually does need a move log because how deep it can go but it should use a different move log or actually remove the 

        moveLogIndex--
        let move = moveLog.pop()
        // update list 
        piecesList[move[0][1]][move[0][0]] = piecesList[move[1][1]][move[1][0]]
        piecesList[move[0][1]][move[0][0]][2] = move[4]
        piecesList[move[1][1]][move[1][0]] = ["--", "--", "--"]

    // give back captured piece if there is one
        if (move[3][0] != "--") {
            //updateList([move[1][0], move[1][1], document.getElementById(move[2])], move[0][0], move[0][1])
            piecesList[move[1][1]][move[1][0]] = [move[3][0], move[3][1], false]


        }
            
    // update king pos
        if (piecesList[move[0][1]][move[0][0]][0] == "wK") {
            whiteKingLocation = [move[0][1], move[0][0]]
        }
        else if (piecesList[move[0][1]][move[0][0]][0] == "bK")
            blackKingLocation = [move[0][1], move[0][0]]

    // change turns
        turn = !turn
    

    // figure out en passant
    // castling
    // promotions
    // other stuff
    }
}

function confirmMovement(moves, selected, mouseX, mouseY, endPlayersTurn) {

    moveInMoves = false
    moves.forEach(move => {
        if (move[0][0] == mouseY && move[0][1] == mouseX && piecesList[selected[1]][selected[0]][0] == move[1] && ((turn && piecesList[selected[1]][selected[0]][0].charAt(0) == "w") || (!turn && piecesList[selected[1]][selected[0]][0].charAt(0) == "b"))) {
            moveInMoves = true
        }
    })

    // if mouse is on slot that moves is in
    if (moveInMoves) {
        let piece = piecesList[selected[1]][selected[0]]

        // en passant
        // if go up and to the left or right and there isn't a piece there
        let revMove = 1
        if ((white && piecesList[selected[1]][selected[0]][0].charAt(0) == "b") || (!white && piecesList[selected[1]][selected[0]][0].charAt(0) == "w")) {revMove = -1}

        if (selected[1] - revMove == mouseY && piecesList[mouseY][mouseX][0] == "--") {
                if (selected[0] - 1 == mouseX && piecesList[selected[1]][selected[0] - 1][0].charAt(1) == "P" && piecesList[selected[1]][selected[0]][0].charAt(1) == "P") { // to the left
                    updateList([selected[0] - 1, selected[1]], selected[0] - 1, selected[1])
                } else if (selected[0] + 1 == mouseX && piecesList[selected[1]][selected[0] + 1][0].charAt(1) == "P" && piecesList[selected[1]][selected[0]][0].charAt(1) == "P") { // to the right
                    updateList([selected[0] + 1, selected[1]], selected[0] + 1, selected[1])
                }
            }
        
        // castling
        if (piece[2] == false && (piece[0] == "wK" || piece[0] == "bK")) { // checking if piece is an unmoved king
            // king side
            if (mouseX == 6 && piecesList[selected[1]][7][0].charAt(1) == "R") { // makes sure that rook is there
                let castledRook = document.getElementById(piecesList[selected[1]][7][1]).style
                castledRook.left = 5 * SQ_SIZE
                castledRook.top = selected[1] * SQ_SIZE

                
                updateList([7, selected[1], piecesList[selected[1]][7][1]], 5, selected[1])
            }
            // queen side
            if (mouseX == 2 && piecesList[selected[1]][0][0].charAt(1) == "R") {
                let castledRook = document.getElementById(piecesList[selected[1]][0][1]).style
                castledRook.left = 3 * SQ_SIZE
                castledRook.top = selected[1] * SQ_SIZE
                updateList([0, selected[1], piecesList[selected[1]][0][1]], 3, selected[1])
            }    
        }

        // set piece location to new
        let pieceObject = selected[2].style
        pieceObject.left = mouseX * SQ_SIZE + boardContainer.left - offX + SQ_SIZE / 2
        pieceObject.top = mouseY * SQ_SIZE + boardContainer.top - offY + SQ_SIZE / 2

        // update the list
                    // from                     to where           what piece moved, did it capture a piece and its id, has moved previously?
        moveLog.push([[selected[0], selected[1]], [mouseX, mouseY], selected[2].id, piecesList[mouseY][mouseX], piecesList[selected[1]][selected[0]][2]])
        updateList(selected, mouseX, mouseY)

        //update king position
        if (piece[0] == "wK") {
            whiteKingLocation = [mouseY, mouseX]
        } else if (piece[0] == "bK") {
            blackKingLocation = [mouseY, mouseX]
        }
        
        // piece has moved
        piecesList[mouseY][mouseX][2] = true

        // pawn promotion
        if (piecesList[mouseY][mouseX][0].charAt(1) == 'P' && (mouseY == 7 || mouseY == 0)) {
            canMove = false
            pawnPromotionDiv = document.getElementById('pawnPromotion').style
            pawnPromotionDiv.left = mouseX * SQ_SIZE + boardContainer.left
            pawnPromotionDiv.top = mouseY * SQ_SIZE + boardContainer.top
            pawnPromotionDiv.display = "block"
            promotedPawnInfo = piecesList[mouseY][mouseX].concat(mouseX, mouseY)
        }
        
    } else {
        // reset loc
        let pieceObject = selected[2].style //document.getElementById(selected[2]).style;
        pieceObject.left = selected[0] * SQ_SIZE + boardContainer.left - offX + SQ_SIZE / 2
        pieceObject.top = selected[1] * SQ_SIZE + boardContainer.top - offY + SQ_SIZE / 2
        selected[2].style.zIndex = "0"
    }

    // calc checkmate and stalemate // probably not the best way to do it
    //turn = !turn
    
    // checks if current player has moves
    let validMove = getValidMoves()
    if (validMove.length == 0 && InCheck) {
        Checkmate = true
    } else if (validMove.length == 0) {
        Stalemate = true
    }
    //turn = !turn

    if (moveInMoves) {
        moves = []
        moveLogIndex++
        turn = !turn

        if (endPlayersTurn && !playingVSHuman) {
            calcAIMovement()
        }
    }

    // checks if other player is in checkmate or not
    validMove = getValidMoves()
    if (validMove.length == 0 && InCheck) {
        finishGame()
    } else if (validMove.length == 0) {
        finishGame()
    }
}

function calcAIMovement() {
    if (!turn) {
        validMoves = getValidMoves()
        let returnValues = findBestMoveMinMax(validMoves)
        if (returnValues != false)
        //let returnValues = findRandomMove(validMoves)
                        // moves,       selected        mouseX          mouseY
        confirmMovement(returnValues[0], returnValues[1], returnValues[2], returnValues[3], false)
    }
}

function undoMove() {
    // go back through the moveLog
    if (moveLogIndex >= 1) {
        moveLogIndex--
        let move = moveLog[moveLogIndex]
        // move back piece
        let piece = document.getElementById(move[2]).style
        piece.left = move[0][0] * 100
        piece.top = move[0][1] * 100
        updateList([move[1][0], move[1][1], document.getElementById(move[2])], move[0][0], move[0][1])
    // give back captured piece if there is one
        if (move[3][0] != "--") {
            // spawn piece back in
            // give it correct id
            // put it in the correct position
            const element = `<div id=${move[3][1]} onmousedown="piecesMouseDown('${move[3][1]}')" onmouseup="piecesMouseUp()" z-index:0 style="position:absolute; left:` + (move[1][0] * SQ_SIZE) + '; top:' + (move[1][1] * SQ_SIZE) + ';"><img src="Pieces/' +  move[3][0] + '.png" draggable="false"></div>';
            document.querySelector('#images').innerHTML += element;
            // put it back in list

            piecesList[move[1][1]][move[1][0]] = [move[3][0], move[3][1]]


        }
    // change turns
        turn = !turn
    // update king pos
    if (piecesList[move[0][1]][move[0][0]][0] == "wK") {
        whiteKingLocation = [move[0][1], move[0][0]]
    }
    else if (piecesList[move[0][1]][move[0][0]][0] == "bK")
        blackKingLocation = [move[0][1], move[0][0]]
    // figure out en passant
    // castling
    // promotions
    // other stuff
    }
}

function redoMove() {

    if (moveLog.length > moveLogIndex) {
        let move = moveLog[moveLogIndex]
        moveLogIndex++
    // move piece again
        let piece = document.getElementById(move[2]).style
        piece.left = move[1][0] * 100
        piece.top = move[1][1] * 100

    // update list
        updateList([move[0][0], move[0][1]], move[1][0], move[1][1])

    // change turns
        turn = !turn

    // update king pos
    if (piecesList[move[1][1]][move[1][0]][0] == "wK") {
        whiteKingLocation = [move[1][1], move[1][0]]
    }
    else if (piecesList[move[1][1]][move[1][0]][0] == "bK")
        blackKingLocation = [move[1][1], move[1][0]]
    }


}

function newGame() {
    console.log("new game")
}

function reviewGame() {

}

function finishGame() {

    let finishScreen = document.getElementsByClassName("finishScreen")[0].style
    let winText = document.getElementById("winText")
    let score = document.getElementById("score")
    finishScreen.display = "flex"

    if (Stalemate) { // its a tie
        winText.innerHTML = "Its a tie"
        score.innerHTML = "1/2 - 1/2"

    } else {
        if (turn) { // white lost
            winText.innerHTML = "You Lost"
            score.innerHTML = "0 - 1"
        } else { // black lost
            winText.innerHTML = "You Won!"
            score.innerHTML = "1 - 0"
        }
    }
}

function takePiece(x, y) {
    // play take audio
    var takeAudio = document.querySelector('#takeAudio')
    takeAudio.play()
    // remove object from screen
    document.getElementById(piecesList[y][x][1]).remove()
}

function updateList(selected, x, y) {
    
    if (piecesList[y][x][0] != "--" && piecesList[selected[1]][selected[0]][1] != piecesList[y][x][1]) {// doesn't == own piece
        takePiece(x, y)
    } else {
        // play audio
        var moveAudio = document.querySelector('#moveAudio')
        moveAudio.play()
    }

    piecesList[y][x] = piecesList[selected[1]][selected[0]]
    piecesList[y][x][2] = true
    piecesList[selected[1]][selected[0]] = ["--", "--", "--"]
}

function getValidMoves() {
    Pins = []
    Checks = []
    InCheck = false
    let moves = []
    returnValue = checkForPinsAndChecks()
    InCheck = returnValue[0]
    Pins = returnValue[1]
    Checks = returnValue[2]
    if (turn) {
        kingRow = whiteKingLocation[0]
        kingCol = whiteKingLocation[1]
    } else {
        kingRow = blackKingLocation[0]
        kingCol = blackKingLocation[1]
    }
    if (InCheck) {
        if (Checks.length == 1) {
            moves = getAllPossibleMoves()
            check = Checks[0]
            checkRow = check[0]
            checkCol = check[1]
            pieceChecking = piecesList[checkRow][checkCol][0]
            var validSquares = []
            if (pieceChecking.charAt(1) == 'N') {
                validSquares = [[checkRow, checkCol]]
            } else {
                for (let i = 1; i < 8; i++) {
                    var validSquare = [kingRow + check[2] * i, kingCol + check[3] * i]
                    validSquares.push(validSquare)
                    if (validSquare[0] == checkRow && validSquare[1] == checkCol)
                        break
                }
            }
            tempMoves = []
            for (let i = moves.length - 1; i >= 0; i--) {
                //if (moves[i][1].charAt(1) != 'K') {
                    for (let v = 0; v < validSquares.length; v++) {
                        if ((moves[i][0][0] == validSquares[v][0] && moves[i][0][1] == validSquares[v][1]) || moves[i][1].charAt(1) == 'K') {
                            // the || == 'K' is valid because the king makes its own moves depending if it goes into check or not
                            tempMoves.push(moves[i])
                        }
                    }
                //}
            }
            moves = tempMoves
        } else {
            moves = KingMovement(kingCol, kingRow)
        }
    } else {
        moves = getAllPossibleMoves()
    }
    return moves
}

function checkForPinsAndChecks() {
    let pins = []
    let checks = []
    let inCheck = false
    if (turn) {
        enemyColor = "b"
        allyColor = "w"
        startRow = whiteKingLocation[0]
        startCol = whiteKingLocation[1]
    } else {
        enemyColor = "w"
        allyColor = "b"
        startRow = blackKingLocation[0]
        startCol = blackKingLocation[1]
    }
    
    directions = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
    for (let j = 0; j < directions.length; j++) {
        d = directions[j]
        possiblePin = []
        for (let i = 1; i < 8; i++) {
            let endRow = startRow + d[0] * i
            let endCol = startCol + d[1] * i
            if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
                endPiece = piecesList[endRow][endCol][0]
                if (endPiece.charAt(0) == allyColor && endPiece.charAt(1) != 'K') {
                    if (possiblePin.length == 0) {
                        possiblePin = [endRow, endCol, d[0], d[1]]
                    } else
                        break
                } else if (endPiece.charAt(0) == enemyColor) {
                    type = endPiece.charAt(1)
                    if ((0 <= j && j <= 3 && type == 'R') || (4 <= j && j <= 7 && type == 'B') || (i == 1 && type == 'P' && ((enemyColor == 'w' && 6 <= j && j <= 7) || (enemyColor == 'b' && 4 <= j && j <= 5))) || (type == 'Q') || (i == 1 && type == 'K')) {
                        if (possiblePin.length == 0) {
                            inCheck = true
                            checks.push([endRow, endCol, d[0], d[1]])
                            break
                        } else {
                            pins.push(possiblePin)
                            break
                        }
                    } else {
                        break
                    }
                }
            } else {
                break
            }
        }
    }
    knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
    knightMoves.forEach(m => {
        endRow = startRow + m[0]
        endCol = startCol + m[1]
        if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
            endPiece = piecesList[endRow][endCol][0]
            if (endPiece.charAt(0) == enemyColor && endPiece.charAt(1) == 'N') {
                inCheck = true
                checks.push([endRow, endCol, m[0], m[1]])
            }
        }
    })
    return [inCheck, pins, checks]
}

function getAllPossibleMoves() {
    let moves = []

    for (let y = 0; y < DIMENSION; y++) {
        for (let x = 0; x < DIMENSION; x++) {
            if (piecesList[y][x][0] != "--") {
                turnColor = piecesList[y][x][0].charAt(0)
                piece = piecesList[y][x][0].charAt(1)
                if ((turnColor == 'w' && turn) || (turnColor == 'b' && !turn))
                {
                    if (piece == "P") {
                        piecesMoves = PawnMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                    else if (piece == "R") {
                        piecesMoves = RookMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                    else if (piece == "N") {
                        piecesMoves = KnightMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                    else if (piece == "B") {
                        piecesMoves = BishopMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                    else if (piece == "Q") {
                        piecesMoves = QueenMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                    else if (piece == "K") {
                        piecesMoves = KingMovement(x, y)
                        for (let i = 0; i < piecesMoves.length; i++) {
                            moves = moves.concat([[piecesMoves[i], piecesList[y][x][0], piecesList[y][x][1]]])
                        }
                    }
                }
            }
        }
    }

    return moves
}

// turns the location of a piece into the index
function convertLocToIndex(x, y) {
    boardContainer = document.getElementById('boardContainer').getBoundingClientRect();
    xIndex = Math.floor((x - boardContainer.left) / SQ_SIZE)
    yIndex = Math.floor((y - boardContainer.top) / SQ_SIZE)

    return [xIndex, yIndex]
}

function convertIndexToLoc(x, y) {
    boardContainer = document.getElementById('boardContainer').getBoundingClientRect();
    xLoc = x * SQ_SIZE + boardContainer.left
    yLoc = y * SQ_SIZE + boardContainer.top

    return [xLoc, yLoc]
}

function promotePawn(piece) {
    // chage piece to selected
    let pawn = document.getElementById(promotedPawnInfo[1])
    let pawnImg = pawn.firstChild
    let pieceCol = promotedPawnInfo[0][0].charAt(0)

    if (pieceCol == 'w')
            pawnImg.src = "Pieces/w" + piece + ".png"
    else
        pawnImg.src = "Pieces/b" + piece + ".png"
    pawn.id = pieceCol + piece + promotedPawnInfo[1].charAt(2) + promotedPawnInfo[1].charAt(3)
    pawn.setAttribute("onmousedown", `piecesMouseDown('${pawn.id}')`)
    piecesList[promotedPawnInfo[4]][promotedPawnInfo[3]] = [pieceCol + piece, pawn.id, true]

    canMove = true
    pawnPromotionDiv = document.getElementById('pawnPromotion').style
    pawnPromotionDiv.display = "none"
}

// pawn moves
function PawnMovement(x, y) {
    
    let moves = []

    let col = x
    let row = y

    let revMove = 1
    let enemyCol = "b"
    if (piecesList[row][col][0].charAt(0) == "b") {enemyCol = "w"}
    if ((white && piecesList[row][col][0].charAt(0) == "b") || (!white && piecesList[row][col][0].charAt(0) == "w")) {revMove = -1}

    // check to see if piece is pinned
    let piecePinned = false
    let pinDirection = []
    for (let i = Pins.length - 1; i >= 0; i--) {
        if (Pins[i][0] == row && Pins[i][1] == col) {
            piecePinned = true
            pinDirection = (Pins[i][2], Pins[i][3])
            Pins.splice(i)
            break
        }
    }

    // take piece
    if (0 <= row - revMove && row - revMove < 8 && 0 <= col - 1 && col - 1 < 8 && (!piecePinned || pinDirection == (-revMove, -1))) {
        if (piecesList[row - revMove][col - 1][0].charAt(0) == enemyCol) {
            moves.push([row - revMove, col - 1])
        }
    }
    if (0 <= row - revMove && row - revMove < 8 && 0 <= col + 1 && col + 1 < 8 && (!piecePinned || pinDirection == (-revMove, 1))) {
        if (piecesList[row - revMove][col + 1][0].charAt(0) == enemyCol) {
            moves.push([row - revMove, col + 1])
        }
    }

    // move forward
    endRow = row - revMove
    endCol = col
    if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8 && (!piecePinned || pinDirection == (-revMove, 0))) {
        if (piecesList[row - revMove][col][0] == "--") {
            moves.push([row - revMove, col])
            // move two forward
            if (((row == 6 && (white && piecesList[row][col][0].charAt(0) == "w") || (!white && piecesList[row][col][0].charAt(0) == "b")) || (row == 1 && (white && piecesList[row][col][0].charAt(0) == "b") || (!white && piecesList[row][col][0].charAt(0) == "w"))) && piecesList[row - 2 * revMove][col][0] == "--")
                moves.push([row - 2 * revMove, col])
        }
    }
    return moves
}

function RookMovement(x, y) {
    let moves = []
    col = x
    row = y
    directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    enemyColor = "b"
    if (piecesList[row][col][0].charAt(0) == "b") {enemyColor = "w"}

    // check to see if piece is pinned
    piecePinned = false
    pinDirection = []
    for (let i = Pins.length - 1; i >= 0; i--) {
        if (Pins[i][0] == row && Pins[i][1] == col) {
            piecePinned = true
            pinDirection = (Pins[i][2], Pins[i][3])
            Pins.splice(i)
            break
        }
    }

    directions.forEach(d => {
        for (let i = 1; i < 8; i++) {
            endRow = row + d[0] * i
            endCol = col + d[1] * i

            if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
                if (!piecePinned || pinDirection == d || pinDirection == [-d[0], -d[1]])
                if (piecesList[endRow][endCol][0] == "--") {
                    moves.push([endRow, endCol])
                } else if (piecesList[endRow][endCol][0].charAt(0) == enemyColor) {
                    moves.push([endRow, endCol])
                    break;
                }
                else {
                    break;
                }
            } else {
                break;
            }
        }
    })
    return moves
}

function KnightMovement(x, y) {
    let moves = []
    col = x
    row = y
    directions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
    enemyColor = "b"
    if (piecesList[row][col][0].charAt(0) == "b") {enemyColor = "w"}

    directions.forEach(d => {
        endRow = row + d[0]
        endCol = col + d[1]

        if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
            if (piecesList[endRow][endCol][0] == "--") {
                moves.push([endRow, endCol])
            } else if (piecesList[endRow][endCol][0].charAt(0) == enemyColor) {
                moves.push([endRow, endCol])
            }
        }
    })
    return moves
}

function BishopMovement(x, y) {
    let moves = []
    col = x
    row = y
    directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    enemyColor = "b"
    if (piecesList[row][col][0].charAt(0) == "b") {enemyColor = "w"}

    directions.forEach(d => {
        for (let i = 1; i < 8; i++) {
            endRow = row + d[0] * i
            endCol = col + d[1] * i

            if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
                if (piecesList[endRow][endCol][0] == "--") {
                    moves.push([endRow, endCol])
                } else if (piecesList[endRow][endCol][0].charAt(0) == enemyColor) {
                    moves.push([endRow, endCol])
                    break;
                }
                else {
                    break;
                }
            } else {
                break;
            }
        }
    })
    return moves
}

function QueenMovement(x, y) {
    let moves = []
    col = x
    row = y
    directions = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
    enemyColor = "b"
    if (piecesList[row][col][0].charAt(0) == "b") {enemyColor = "w"}

    directions.forEach(d => {
        for (let i = 1; i < 8; i++) {
            endRow = row + d[0] * i
            endCol = col + d[1] * i

            if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
                if (piecesList[endRow][endCol][0] == "--") {
                    moves.push([endRow, endCol])
                } else if (piecesList[endRow][endCol][0].charAt(0) == enemyColor) {
                    moves.push([endRow, endCol])
                    break;
                }
                else {
                    break;
                }
            } else {
                break;
            }
        }
    })
    return moves
}

function KingMovement(x, y) {
    let moves = []
    let c = x
    let r = y
    let rowMoves = [-1, -1, -1, 0, 0, 1, 1, 1]
    let colMoves = [-1, 0, 1, -1, 1, -1, 0, 1]
    let allyColor = "w"
    if (!turn) {allyColor = "b"}

    for (let i = 0; i < 8; i++) {
        let endRow = r + rowMoves[i]
        let endCol = c + colMoves[i]
        if (0 <= endRow && endRow < 8 && 0 <= endCol && endCol < 8) {
            endPiece = piecesList[endRow][endCol][0]
            if (endPiece.charAt(0) != allyColor) {
                if (allyColor == 'w')
                    whiteKingLocation = [endRow, endCol]
                else
                    blackKingLocation = [endRow, endCol]
                let returnValue = checkForPinsAndChecks()
                if (!returnValue[0]) {
                    moves.push([endRow, endCol])
                }
                if (allyColor == 'w')
                    whiteKingLocation = [r, c]
                else {
                    blackKingLocation = [r, c]
                }

            }
        }
    }
    return moves
}