export default function GameDice(){
    const num1=Math.floor(Math.random()*3)+1
    const num2=Math.floor(Math.random()*3)+1
    const result= num1===num2 ? "You win :)" : "You lose :("
    return(<>
    <h1>{result}</h1>
    </>)


    // if(num1===num2){
    //     return(<>
    //         <h2>Zar at</h2>
    //         <h1>You win</h1>
    //         <p>Num1:{num1}</p>
    //         <p>Num2: {num2}</p>
            
    //         </>) 

    // }else{
    //     return(<>
    //         <h2>Zar at</h2>
    //         <h1>You loose</h1>
    //         <p>Num1:{num1}</p>
    //         <p>Num2: {num2}</p>
            
    //         </>) 
    // }
    
}