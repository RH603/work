import HandIcon from "./Handleicon"



function HandButton({value}){
    
    const handleButtonClick = () => {
        if(value == "rock"){
            alert("rock")
        } else if(value == "scissor"){
            alert("scissor")
        } else if(value == "paper"){
            alert("paper")
        }
      };
      console.log(HandIcon[value])  
    return(
        <button onClick={handleButtonClick}>
            <HandIcon value={value}/>
        </button>
    )
}

export default HandButton