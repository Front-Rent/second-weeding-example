import DaySection from "./DaySection/DaySection";
import PlanSection from "./PlanSection/PlanSection";
import MapsSection from "./MapsSection/MapsSection";

import "./Main.scss";
import CounterSection from "./DaySection/CounterSection/CounterSection";

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
