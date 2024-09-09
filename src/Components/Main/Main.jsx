import DaySection from "./DaySection/DaySection";
import PlanSection from "./PlanSection/PlanSection";
import MapsSection from "./MapsSection/MapsSection";
import CounterSection from "./CounterSection/CounterSection";

import "./Main.scss";

const Main = () => {
  return (
    <main>
      <DaySection />
      <PlanSection />
      <MapsSection />
      <CounterSection />
    </main>
  );
};

export default Main;
