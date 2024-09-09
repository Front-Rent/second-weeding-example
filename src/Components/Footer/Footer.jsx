import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.scss";
import sendEmail from "../../email";

const Footer = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [attendance, setAttendance] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
        Ձեր հրավերը ${attendance ? "ընդունել" : "մերժել"} է ${name}-նը
        Հյուրերի քանակ: ${guests}
        Պատասխան: ${
          attendance === "kgam"
            ? "Այո կգամ"
            : "Կներեք բայց ստիպված եմ ձեզ մերժել"
        }
    `;

    await sendEmail(name, guests, message);

    setName("");
    setGuests("");
    setAttendance("");
  };

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <motion.form
      ref={ref}
      className="footer"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 {...animationProps}>
        Խնդրում ենք լրացնել ձեր տվյալները
      </motion.h2>

      <div className="footer-name">
        <motion.h3 {...animationProps}>Գրեք ձեր անուն և ազգանունը</motion.h3>
        <motion.input
          type="text"
          placeholder="Անուն , ազգանուն"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          {...animationProps}
          transition={{ duration: 0.5, ease: "easeOut" }} // Slightly faster input animation
        />
      </div>

      <div className="footer-guests">
        <motion.h3 {...animationProps}>
          Մուտքագրեք ընդանուր հյուրերի քանակը
        </motion.h3>
        <motion.input
          type="text"
          placeholder="Հյուրերի քանակ"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          {...animationProps}
          transition={{ duration: 0.5, ease: "easeOut" }} // Slightly faster input animation
        />
      </div>

      <motion.div className="footer-agare" {...animationProps}>
        <label>
          <input
            type="radio"
            name="hamadzaynvel"
            value="kgam"
            checked={attendance === "kgam"}
            onChange={(e) => setAttendance(e.target.value)}
            required
          />
          Այո կգամ
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="hamadzaynvel"
            value="chem-ga"
            checked={attendance === "chem-ga"}
            onChange={(e) => setAttendance(e.target.value)}
            required
          />
          Կներեք բայց ստիպված եմ ձեզ մերժել
        </label>
      </motion.div>

      <motion.button type="submit" {...animationProps}>
        Ուղարկել
      </motion.button>
    </motion.form>
  );
};

export default Footer;
