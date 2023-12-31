import { motion } from "framer-motion";

export function Event() {
    function onUpdate(latest) {
        console.log(latest.x)
    }
    function onStart(){
        console.log("Animation started")
    }
    function onComplate(){
        console.log("Animation completed")
    }

  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          animate={{ x: 400 }}
          transition={{ delay: 1 }}
        //   onUpdate={onUpdate}
        onAnimationStart={onStart}
        onAnimationComplete={onComplate}
        ></motion.div>
      </div>
    </>
  );
}
