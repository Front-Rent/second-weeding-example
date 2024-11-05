import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RestoranQartez from "./RestoranQartez/RestoranQartez";
import EkexeciQartez from "./EkexeciQartez/EkexeciQartez";
import "./MapsSection.scss";

const MapsSection = () => {
  const [openMap, setOpenMap] = useState(null);

  const { ref: refH2, inView: inViewH2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refH3First, inView: inViewH3First } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refH3Second, inView: inViewH3Second } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refButtonFirst, inView: inViewButtonFirst } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refButtonSecond, inView: inViewButtonSecond } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refEkexeci, inView: inViewEkexeci } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refRestoran, inView: inViewRestoran } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleToggleMap = (mapType) => {
    setOpenMap(openMap === mapType ? null : mapType);
  };

  return (
    <section className="map-section">
      <motion.h2
        ref={refH2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewH2 ? 1 : 0, y: inViewH2 ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Հասցեներ
      </motion.h2>

      <motion.h3
        ref={refH3First}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewH3First ? 1 : 0, y: inViewH3First ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Հարսանեկան արարողությունը տեղի է ունանալու
      </motion.h3>
      <motion.button
        ref={refButtonFirst}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inViewButtonFirst ? 1 : 0,
          scale: inViewButtonFirst ? 1 : 0.9,
        }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => handleToggleMap("ekexeci")}
        style={{ color: "white" }}
      >
        Սուրբ Աստվածածին Եկեղեցի
      </motion.button>
      <AnimatePresence>
        {openMap === "ekexeci" && (
          <motion.div
            ref={refEkexeci}
            key="ekexeci"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inViewEkexeci ? 1 : 0,
              y: inViewEkexeci ? 0 : 50,
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <EkexeciQartez isOpen={true} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h3
        ref={refH3Second}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inViewH3Second ? 1 : 0,
          y: inViewH3Second ? 0 : 50,
        }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Հանդիսավոր ընթրիքը տեղի է ունանալու
      </motion.h3>
      <motion.button
        ref={refButtonSecond}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inViewButtonSecond ? 1 : 0,
          scale: inViewButtonSecond ? 1 : 0.9,
        }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => handleToggleMap("restoran")}
        style={{ color: "white" }}
      >
        Astafyan Hall Resturant
      </motion.button>
      <AnimatePresence>
        {openMap === "restoran" && (
          <motion.div
            ref={refRestoran}
            key="restoran"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inViewRestoran ? 1 : 0,
              y: inViewRestoran ? 0 : 50,
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <RestoranQartez isOpen={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MapsSection;
