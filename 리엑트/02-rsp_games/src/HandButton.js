import HandIcon from "./Handleicon"
import "./HandButton.css"


function HandButton({value,onClick}){
    
    // const handleButtonClick = (value) => {
    //     if(value == "rock"){
    //         alert("rock")
    //     } else if(value == "scissor"){
    //         alert("scissor")
    //     } else if(value == "paper"){
    //         alert("paper")
    //     }
    //   };
    //   console.log(HandIcon[value])  
      const handleClick = () =>{
            onClick(value)
      }
    return(

        <button className="HandButton" onClick={handleClick}>
            <HandIcon className="HandButton-icon" value={value}/>
        </button>
    )
}

export default HandButton