// import libs/other
import React from "react";
import { Spinner } from "reactstrap";
import { motion } from "framer-motion";

const Loader = props => {
  const customAnimation = {
    scale: [1, 1.3, 1, 1.3]
  };
  const customTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div className="d-flex align-items-center justify-content-center m-2">
      <motion.div
        animate={customAnimation}
        transition={customTransition}
        className="m-2"
      >
        <Spinner color="danger" />
      </motion.div>

      <motion.div
        animate={customAnimation}
        transition={customTransition}
        className="m-2"
      >
        <Spinner color="warning" />
      </motion.div>

      <motion.div
        animate={customAnimation}
        transition={customTransition}
        className="m-2"
      >
        <Spinner color="success" />
      </motion.div>

      <motion.div
        animate={customAnimation}
        transition={customTransition}
        className="m-2"
      >
        <Spinner color="primary" />
      </motion.div>
    </div>
  );
};

export default Loader;
