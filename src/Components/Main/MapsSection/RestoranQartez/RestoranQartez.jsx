import React from "react";

const RestoranQartez = ({ isOpen }) => {
  return (
    <div className={`map ${isOpen ? "open" : ""}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194841.56190216818!2d44.4899692!3d40.2668771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa4a0e909bd89%3A0x82b95444dba6e79c!2sAstafyan%20Hall!5e0!3m2!1shy!2sam!4v1725881340715!5m2!1shy!2sam"
        title="Astafyan"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default RestoranQartez;
