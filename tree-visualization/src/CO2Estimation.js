import { treeData } from './treeData';
import { calculateCO2Absorption } from './calculateCO2';

function CO2Estimation() {
  const totalCO2 = treeData.reduce(
    (acc, tree) => acc + calculateCO2Absorption(tree.diameter, tree.height),
    0
  );

  return (
    <div>
      <h2>Total CO₂ Absorption: {totalCO2.toFixed(2)} kg/year</h2>
    </div>
  );
}

export default CO2Estimation;
