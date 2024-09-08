import furshet from "../.././../assets/Imgs/furshet.png";
import grancum from "../.././../assets/Imgs/grancum.png";
import banket from "../.././../assets/Imgs/banket.png";
import avart from "../.././../assets/Imgs/avart.png";

import "./PlanSection.scss";

const PlanSection = () => {
  return (
    <section className="plan-section">
      <h2>Օրվա պլանը</h2>
      <div className="plan-section-furshet">
        <img src={furshet} alt="furshet" />
        <h3>
          16:30
          <br />
          Ֆուրշետ
        </h3>
      </div>
      <div className="plan-section-grancum">
        <img src={grancum} alt="grancum" />
        <br />
        <h3>
          17:00 <br />
          Տեղում <br />
          գրանցման <br />
          սկիզբ
        </h3>
      </div>
      <div className="plan-section-hac-utel">
        <img src={banket} alt="banket" />
        <h3>
          18:00 <br /> Հանդիսավոր <br /> ընթրիք
        </h3>
      </div>
      <div className="plan-section-hac-telu-prcnely">
        <img src={avart} alt="" />
        <h3>
          23:00
          <br />
          Հանդիսավոր <br /> ընթրիքի <br /> ավարտ
        </h3>
      </div>
    </section>
  );
};

export default PlanSection;
