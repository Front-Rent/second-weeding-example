import { motion } from "framer-motion";
import furshet from "../.././../assets/Imgs/furshet.png";
import grancum from "../.././../assets/Imgs/grancum.png";
import banket from "../.././../assets/Imgs/banket.png";
import avart from "../.././../assets/Imgs/avart.png";

import "./PlanSection.scss";

const PlanSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="plan-section">
      <h2>Օրվա պլանը</h2>
      <motion.div
        className="plan-section-furshet"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <img src={furshet} alt="furshet" />
        <h3>
          16:30
          <br />
          Ֆուրշետ
        </h3>
      </motion.div>

      <motion.div
        className="plan-section-grancum"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={variants}
      >
        <img src={grancum} alt="grancum" />
        <br />
        <h3>
          17:00 <br />
          Տեղում <br />
          գրանցման <br />
          սկիզբ
        </h3>
      </motion.div>

      <motion.div
        className="plan-section-hac-utel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={variants}
      >
        <img src={banket} alt="banket" />
        <h3>
          18:00 <br /> Հանդիսավոր <br /> ընթրիք
        </h3>
      </motion.div>

      <motion.div
        className="plan-section-hac-telu-prcnely"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={variants}
      >
        <img src={avart} alt="avart" />
        <h3>
          23:00
          <br />
          Հանդիսավոր <br /> ընթրիքի <br /> ավարտ
        </h3>
      </motion.div>
    </section>
  );
};

export default PlanSection;
