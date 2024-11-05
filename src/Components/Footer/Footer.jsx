import logo from "../../assets/Imgs/341a51ca-4426-42e8-a7d5-16835cdb2903-removebg-preview.png";
import phenixLogo from "../../assets/Imgs/14e14b44-028a-40fb-a6af-3240d4c74387-removebg-preview.png";

import "./Footer.scss";
import "./FooterResp.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer-logo" />
      <h1 className="footer-title">Գլխավոր հովանավոր</h1>
      <div className="footer-cont">
        <img src={phenixLogo} alt="" className="footer-cont-logo" />
        <h2 className="footer-cont-title">Phenix corporation</h2>
      </div>
      <p className="footer-text">
        Մանրամսների համար
        <br /> +374 44 885105
      </p>
      <p className="footer-email">phenixcorparm@gmail.com</p>
    </footer>
  );
};

export default Footer;
