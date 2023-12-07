import { motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, transition: { type: "spring", delay: 1 } },
};
const circleVariants = {
  start: { y: "50px", opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring", delay: 5, duration:1 } },
};

export function MyMotion2() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box2"
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          <motion.div
            className="circle"
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 5, duration:1 }}

          ></motion.div>
          <motion.div
            className="circle"
            variants={circleVariants}

          ></motion.div>
          <motion.div
            className="circle"
            variants={circleVariants}

          ></motion.div>
          <motion.div
            className="circle"
            variants={circleVariants}

          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
