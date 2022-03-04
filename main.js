console.log("rock paper scissors");

function comPlay() {
    let moves = [ "rock", "paper", "scissors" ];

    let move = moves[Math.floor(Math.random() * moves.length)];
    console.log( "computer: " + move );
    return move;
}

function plyInput() {
    let input = prompt("enter your move here").toLowerCase();
    if ( input != "rock" && input != "paper" && input != "scissors") {
        console.error("not a valid move, use one of: rock, paper, scissors");
    }
    console.log( input );
    return input;
}

function playRound ( plySel, comSel ) {
    if ( plySel == comSel ) {
        console.log("it's a tie!");
        return 2;
    }
    else if ( plySel == "rock" ){
         if ( comSel == "paper" ) {
            console.log ("you picked rock, the computer picked paper; you lost!");
            return 0;
         }
         else {
             //win
            console.log( "you picked rock, the computer picked scissors; you won!" );
            return 1;
         }
    }
    else if ( plySel == "paper" ){
         if ( comSel == "scissors" ) {
             // lose
            console.log( "you picked paper, the computer picked scissors; you lost!" );
            return 0;
         }
         else {
             //win
            console.log( "you picked paper, the computer picked rock; you won!" );
            return 1;
         }
    }
    else if ( plySel == "scissors"){
         if ( comSel == "rock" ) {
             // lose
            console.log( "you picked scissors, the computer picked rock; you lost!" );
            return 0;
         }
         else {
             //win
            console.log( "you picked scissors, the computer picked paper; you won!" );
            return 1;
         }
    }
}

function playMatch () {

    let ply = 0
      , com = 0;

    for ( let i = 0; i < 5; i++ ) {
        let result = playRound( plyInput(), comPlay());

        if ( result == 0 )
            ply++;            
        else if ( result == 1 ) 
            com++;
        //else console.error("something went wrong");
        
    }
    ply > com ? console.log ( "you win!" ) : console.log ( "you lose!" );
    console.log ( "score: " + ply + " : " + com );
}

playMatch();

//console.log( playRound( plyInput(), comPlay() ) );