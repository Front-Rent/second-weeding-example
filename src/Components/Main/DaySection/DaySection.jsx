import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import amis from "../../../assets/Imgs/amsatver.png";
import sirt from "../../../assets/Imgs/sirt.png";

import "./DaySection.scss";

const DaySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      className="day-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        Օգոստոս 2025
      </motion.h2>
      <div className="day-section-mont">
        <motion.div
          className="day-section-mont-words"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span>Եկ</span>
          <span>Եք</span>
          <span>Չո</span>
          <span>Հի</span>
          <span>Ու</span>
          <span>Շա</span>
          <span>Կի</span>
        </motion.div>
        <div className="day-section-mont-numbers">
          <motion.img
            src={amis}
            alt="ogostos"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.div
            className="day-section-mont-numbers-sirt"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 4,
              delay: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <img
              src={sirt}
              alt="sirt"
              className="day-section-mont-numbers-sirt-img"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DaySection;
