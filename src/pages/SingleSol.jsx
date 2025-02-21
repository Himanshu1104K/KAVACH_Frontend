import { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import CardUpper from "../components/CardUpper";
import DynamicGraph from "../components/DynamicGraph";
import { AuthContext } from "../MainComponent";

const SingleSol = () => {
  const { solData } = useContext(AuthContext);
  const [selectedMetric, setSelectedMetric] = useState("Temperature"); // Default metric

  const handleCardClick = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <div>
      <NavBar />
      <h2 className="mainDH text-4xl text-center m-5">
        Single Soldier Dashboard Page
      </h2>
      <div className="grid grid-cols-2 mb-5">
        <div className="w-[30vw] grid grid-cols-2 gap-3 m-5 ml-20">
          <div onClick={() => handleCardClick("efficiency_predictions")}>
            <CardUpper
              title="Efficiency"
              value={solData.efficiency_predictions[0]}
            />
          </div>
          <div onClick={() => handleCardClick("Temperature")}>
            <CardUpper
              title="Temperature"
              value={Math.floor(solData.soldier_data.Temperature["0"])}
            />
          </div>
          <div onClick={() => handleCardClick("Moisture")}>
            <CardUpper
              title="Moisture"
              value={Math.floor(solData.soldier_data.Moisture["0"])}
            />
          </div>
          <div onClick={() => handleCardClick("Water_Content")}>
            <CardUpper
              title="Water Content"
              value={Math.floor(solData.soldier_data.Water_Content["0"])}
            />
          </div>
          <div onClick={() => handleCardClick("SpO2")}>
            <CardUpper
              title="SpO2"
              value={Math.floor(solData.soldier_data.SpO2["0"])}
            />
          </div>
          <div onClick={() => handleCardClick("Fatigue")}>
            <CardUpper
              title="Fatigue"
              value={Math.floor(solData.soldier_data.Fatigue["0"])}
            />
          </div>
        </div>
        <div className="absolute top-[180px] right-[70px] w-[52vw]">
          <DynamicGraph selectedMetric={selectedMetric} />
        </div>
      </div>
      <div className="grid grid-cols-6 p-5 ml-15 mr-8">
        <div onClick={() => handleCardClick("Drowsiness")}>
          <CardUpper
            title="Drowsiness"
            value={Math.floor(solData.soldier_data.Drowsiness["0"])}
          />
        </div>
        <div onClick={() => handleCardClick("Heart_Rate")}>
          <CardUpper
            title="Heart Rate"
            value={Math.floor(solData.soldier_data.Heart_Rate["0"])}
          />
        </div>
        <div onClick={() => handleCardClick("Stress")}>
          <CardUpper
            title="Stress"
            value={Math.floor(solData.soldier_data.Stress["0"])}
          />
        </div>
        <div onClick={() => handleCardClick("Respiration_Rate")}>
          <CardUpper
            title="Respiration Rate"
            value={Math.floor(solData.soldier_data.Respiration_Rate["0"])}
          />
        </div>
        <div onClick={() => handleCardClick("Systolic_BP")}>
          <CardUpper
            title="Systolic BP"
            value={Math.floor(solData.soldier_data.Systolic_BP["0"])}
          />
        </div>
        <div onClick={() => handleCardClick("Diastolic_BP")}>
          <CardUpper
            title="Diastolic BP"
            value={Math.floor(solData.soldier_data.Diastolic_BP["0"])}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSol;
