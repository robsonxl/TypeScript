function startGame(iniciarJogo: boolean){
    const init: string = 'Starting game now....'
    let arena: string = "World  War" 
    if(iniciarJogo){
        arena = "Sky War";
    }
    console.log(`${init} on ${arena}`)
    
}
startGame(true)