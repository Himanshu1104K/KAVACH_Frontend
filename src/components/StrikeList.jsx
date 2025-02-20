import React from "react";
import { AuthContext } from "../MainComponent";
import { useContext } from "react";
function StrikeList() {
  const { solData } = useContext(AuthContext);
  return (
    <>
      {solData?.efficiency_predictions
        ? solData.efficiency_predictions.map((eff, index) => (
            <div
              className="mainDH text-2xl tracking-widest bg-[#504b385c]  justify-center rounded-xl p-5 m-3 text-[#504b38]"
              key={index}
            >
              Soldier {index}: Efficiency {eff}
            </div>
          ))
        : "Loading or No Data"}
    </>
  );
}

export default StrikeList;
