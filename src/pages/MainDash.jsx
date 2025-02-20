import NavBar from "../components/NavBar";
import EfficencyGraph from "../components/EfficencyGraph";
import StrikeGraph from "../components/StrikeGraph";
const MainDash = () => {
  return (
    <div>
      <NavBar />
      <h2>Main Dashboard </h2>
      <div className="grid grid-cols-2 gap-4">
        <EfficencyGraph />
        <StrikeGraph />
      </div>
    </div>
  );
};
export default MainDash;
