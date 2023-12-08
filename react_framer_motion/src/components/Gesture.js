import "./Gesture.css";
import { motion } from "framer-motion";
import { useRef } from "react";
const gestureVariant = {
    hovor : {
        scale: 1.2, rotateZ : 90,
    },
    tap:{
        scale: 0.8, rotateZ : -90, borderRadius : "50%"
    },
    drag: {
        backgroundColor : "rgb(46,204,113)"
    }
}

export function Gesture(){
    // useRef는 리엑트의 후크(hook)중의 하나로서
    // 1) 상태저장을 하되 하면랜더링을 발생 시키지 않을 목적으로 사용함
    // 2) real DOM의 객체요소에 직접 접근하기 위해 사용함
    const biggerBoxRef = useRef();
    return(
        <>
        <div className="container">
            <div className="biggerBox" ref={biggerBoxRef}>
                <motion.div className="box" 
                    variants={gestureVariant}
                    drag
                    // dragSnapToOrigin
                    // dragConstraints={biggerBoxRef}
                    dragConstraints={{top:-225,left:-425,right:425,bottom:225}}
                    whileHover="hovor"
                    whileTap="tap"
                    whileDrag="drag"
                ></motion.div>
            </div>
        </div>
        </>
    )
}