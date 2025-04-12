
let pieceScore = {"K": 0, "Q": 10, "R": 5, "B": 3, "N": 3, "P": 1}
let CHECKMATE = 1000
let STALEMATE = 0
let DEPTH = 3

function findRandomMove(validMoves) {
    let random = Math.round(Math.random() * (validMoves.length - 1))
    move = validMoves[random]

    let piece = document.getElementById(move[2])
    let left = parseInt(piece.style.left, 10) / SQ_SIZE
    let top = parseInt(piece.style.top, 10) / SQ_SIZE

    // moves, selected, mouseX, mouseY
    return [[move], [left, top, piece], move[0][1], move[0][0]]
}

// helper method to make first recursive call
function findBestMoveMinMax(validMoves) {
    nextMove = null
    let test = findMoveMinMax(validMoves, DEPTH, turn)
    // moves, selected, mouseX, mouseY
    let piece = document.getElementById(nextMove[2])
    let left = parseInt(piece.style.left, 10) / SQ_SIZE
    let top = parseInt(piece.style.top, 10) / SQ_SIZE
    return [[nextMove], [left, top, piece], nextMove[0][1], nextMove[0][0]]
}
let counter = 0
function findMoveMinMax(validMoves, depth, whiteToMove) {
    counter++
    if (depth == 0) {
        return scoreBoard()
    }
    if (whiteToMove) {
        let maxScore = -CHECKMATE
        if (validMoves.length == 0 && !InCheck) {
            maxScore = 0
        }
        for (let m = 0; m < validMoves.length; m++) {
            let move = validMoves[m]
            // moves, selected, mouseX, mouseY
            let piece = document.getElementById(move[2])
            let left = parseInt(piece.style.left, 10) / SQ_SIZE
            let top = parseInt(piece.style.top, 10) / SQ_SIZE
            //confirmMovement([move], [left, top, piece], move[0][1], move[0][0], false)
            makeMoveAI([left, top], [move[0][1], move[0][0]])
            nextMoves = getValidMoves()
            let score = findMoveMinMax(nextMoves, depth - 1, false)
            if (score > maxScore) {
                maxScore = score
                if (depth == DEPTH) {
                    nextMove = move
                }
            }
            //undoMove()
            undoAI()
        }
        if (maxScore == CHECKMATE) {
            console.log("I SEE CHECKMATE")
        }
        return maxScore
    } else {
        let minScore = CHECKMATE
        if (validMoves.length == 0 && !InCheck) {
            minScore = 0
        }
        for (let m = 0; m < validMoves.length; m++) {
            let move = validMoves[m]
            // moves, selected, mouseX, mouseY
            let piece = document.getElementById(move[2])
            let left = parseInt(piece.style.left, 10) / SQ_SIZE
            let top = parseInt(piece.style.top, 10) / SQ_SIZE
            //confirmMovement([move], [left, top, piece], move[0][1], move[0][0], false)
            makeMoveAI([left, top], [move[0][1], move[0][0]])
            nextMoves = getValidMoves()
            let score = findMoveMinMax(nextMoves, depth - 1, true)
            if (score < minScore) {
                minScore = score
                if (depth == DEPTH) {
                    nextMove = move
                }
            }
            //undoMove()
            undoAI()
        }
        if (minScore == -CHECKMATE) {
            console.log("I SEE CHECKMATE")
        }
        return minScore
    }
}

// positive score is good for white, a negative score is good for black
function scoreBoard() {
    if (Checkmate) {
        if (turn) {
            return -CHECKMATE // black wins
        } else {
            return CHECKMATE // white wins
        }
    } else if (Stalemate) {
        return STALEMATE // draw
    }

    let score = 0
    for (let y = 0; y < piecesList.length; y++) {
        for (let x = 0; x < piecesList[y].length; x++) {
            let square = piecesList[y][x]
            if (square[0].charAt(0) == "w") {
                score += pieceScore[square[0].charAt(1)]
            } else if (square[0].charAt(0) == "b") {
                score -= pieceScore[square[0].charAt(1)]
            }
        }
    }
    return score
}

// Score the board based on material
function scoreMaterial(piecesList) {
    let score = 0
    for (let y = 0; y < piecesList.length; y++) {
        for (let x = 0; x < piecesList[y].length; x++) {
            let square = piecesList[y][x]
            if (square[0].charAt(0) == "w") {
                score += pieceScore[square[0].charAt(1)]
            } else if (square[0].charAt(0) == "b") {
                score -= pieceScore[square[0].charAt(1)]
            }
        }
    }
    return score
}