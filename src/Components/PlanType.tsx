import React from 'react';
import CardPlan from './CardPlans';
import {free,standard,premiun} from "./CardPlans"


export default function PlanType () {
  return (
    <div className="d-flex justify-content-evenly ">
      <CardPlan {...free} />
      <CardPlan {...standard} />
      <CardPlan {...premiun} />
      {/* ... otras tarjetas si es necesario */}
    </div>
  );
};

