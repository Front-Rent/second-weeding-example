import amis from "../../../assets/Imgs/amsatver.png";
import sirt from "../../../assets/Imgs/sirt.png";

import "./DaySection.scss";

const DaySection = () => {
  return (
    <section className="day-section">
      <h2>Օգոստոս 2025</h2>
      <div className="day-section-mont">
        <div className="day-section-mont-words">
          <span>Եկ</span>
          <span>Եք</span>
          <span>Չո</span>
          <span>Հի</span>
          <span>Ու</span>
          <span>Շա</span>
          <span>Կի</span>
        </div>
        <div className="day-section-mont-numbers">
          <img src={amis} alt="ogostos" />
          <div className="day-section-mont-numbers-sirt">
            <img
              src={sirt}
              alt="sirt"
              className="day-section-mont-numbers-sirt-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaySection;
