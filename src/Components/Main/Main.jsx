import DaySection from "./DaySection/DaySection";
import PlanSection from "./PlanSection/PlanSection";
import MapsSection from "./MapsSection/MapsSection";

import "./Main.scss";

const Main = () => {
  return (
    <main>
      <DaySection />
      <PlanSection />
      <MapsSection />
    </main>
  );
};

export default Main;
