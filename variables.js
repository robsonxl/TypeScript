"use strict";
function startGame(iniciarJogo) {
    var init = 'Starting game now....';
    var arena = "World  War";
    if (iniciarJogo) {
        arena = "Sky War";
    }
    console.log(init + " on " + arena);
}
startGame(true);
