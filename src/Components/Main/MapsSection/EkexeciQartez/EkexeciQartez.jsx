import React from "react";

const EkexeciQartez = ({ isOpen }) => {
  return (
    <div className={`map ${isOpen ? "open" : ""}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.000084275896!2d44.53836907581538!3d40.18681157147749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdc910d0cde3%3A0x607b5f901e5912da!2z1Y3VuNaC1oDVoiDUsdW91b_VvtWh1a7VodWu1avVtiDVpdWv1aXVstWl1oHVqw!5e0!3m2!1shy!2sam!4v1725895773080!5m2!1shy!2sam"
        width="600"
        title="Ekexeci"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EkexeciQartez;
