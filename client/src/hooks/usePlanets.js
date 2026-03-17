import { useState } from "react";
import httpGetPlanets from "./request";

function usePlanets() {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const fetchedPlanets = await httpGetPlanets();
    setPlanets(fetchedPlanets);
  };

  return { planets, getPlanets };
}

export default usePlanets;
