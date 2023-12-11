import rockImg from "./assets/rock.svg";
import ScissorsImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  scissor : ScissorsImg,
  paper: paperImg,
};

function HandIcon({value, className}) {

  const src = IMAGES[value]
//   const alt = `${color} ${num}`
  return(
      <img src={src} alt={value} className={className}/>
  )
}

export default HandIcon;
